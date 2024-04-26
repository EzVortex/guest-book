const express     = require('express');
const { validationResult, body} = require('express-validator');
const {Post} = require("../mongodb/schemes");
const {getIO} = require("../socketio/default");
const {tryToGetUser} = require("../helpers/verify");
const router      = express.Router();

router.get('/posts', async (req, res) => {
    const posts = await Post.find({})
    res.json(posts);
})

router.post('/post', tryToGetUser, body(['text']).notEmpty(), async (req, res) => {
    const result = validationResult(req)

    if (result.isEmpty()) {
        const post = new Post({
            author: req.user?.login || undefined,
            text: req.body.text
        });
        await post.save();
        getIO().emit('post_add', post);
        return res.status(201).send({
            message: 'Комментарий добавлен',
        });
    }

    return res.status(422).send({ errors: result.array() })
})

module.exports = router;