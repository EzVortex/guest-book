const jwt = require("jsonwebtoken");

const secretKey = 'mostSecretKeyInTheWholeWorld' // TODO: Move to .env
const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

const tryToGetUser = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return next()

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

module.exports = {
    verifyToken,
    tryToGetUser,
    secretKey
};