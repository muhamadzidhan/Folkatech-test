const errorHandler = require('../middlewares/errorHandler')
const Hash = require('../helpers/bcrypt')
const Token = require('../helpers/jwt')
const { User } = require('../models')

module.exports = class Controller {
    static async register(req, res, next) {
        try {
            let { namaDepan, namaBelakang, email, nomorTelepon, password } = req.body

            await User.create({
                namaDepan,
                namaBelakang,
                email,
                nomorTelepon,
                password
            })
            const message = `User ${namaDepan} has succesfully registered`;
            res.status(201).json({ message });
        } catch (error) {
            next(error)
        }
    }
}