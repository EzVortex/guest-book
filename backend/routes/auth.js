const express     = require('express');
const { validationResult, body} = require('express-validator');
const {User} = require("../mongodb/schemes");
const {getIO} = require("../socketio/default");
const router      = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = 'mostSecretKeyInTheWholeWorld'

router.post('/signin', body(['login', 'password']).notEmpty(), async (req, res) => {
    const result = validationResult(req)

    if (result.isEmpty()) {
        const user = await User.findOne({login: req.body.login});

        if (!user || !await bcrypt.compare(req.body.password, user.password)) {
            return res.status(401).send({
                message: 'Неверные логин или пароль',
            });
        }

        const token = jwt.sign({login: user.login}, secretKey, {expiresIn: '30d'});

        return res.status(200).send({
            message: 'Успешная авторизация',
            token: token
        })
    }

    return res.status(422).send({ errors: result.array() })
})

router.post('/signup', body(['login', 'password']).notEmpty(), async (req, res) => {
    const result = validationResult(req)

    if (result.isEmpty()) {
        const isUserExist = await User.findOne({login: req.body.login});

        if (isUserExist) {
            return res.status(409).send({
                message: 'Пользователь с таким логином уже существует',
            });
        }

        const user = new User({
            login: req.body.login,
            password: await bcrypt.hash(req.body.password, 10),
        })

        user.save();

        return res.status(200).send({
            message: 'Пользователь успешно зарегистрирован',
        })
    }

    return res.status(422).send({ errors: result.array() })
})

module.exports = router;