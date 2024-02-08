const jwt = require('jsonwebtoken')
const secretKey = 'hello'

function signToken (payload) {
    return jwt.sign(payload,secretKey)
}

function verifyToken (token) {
    return jwt.verify(token, secretKey)
}

module.exports = {
    signToken,
    verifyToken
}