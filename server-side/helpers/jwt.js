const jwt = require("jsonwebtoken");
const secret = process.env.SECRET

module.exports = class Token {
    static create(payload) {
        console.log(secret);
        return jwt.sign(payload, secret);
    }
    static verify(token) {
        console.log(secret);
        return jwt.verify(token, secret);
    }
};