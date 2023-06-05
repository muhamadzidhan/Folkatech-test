const errorHandler = require('../middlewares/errorHandler')
const Hash = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
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

    static async login(req, res, next) {
        try {
            let { email, password } = req.body

            if (!email || email === undefined) throw { name: "empty_email" };
            if (!password || password === undefined) throw { name: "empty_password" };

            const selectUser = await User.findOne({
                where: { email }
            })

            if (!selectUser) {
                throw { name: "unauthorized" }
            }

            if (!Hash.verify(password, selectUser.password)) {
                throw { name: "unauthorized" };
            }

            const token = generateToken({ id: selectUser.id });
            res.status(200).json({
                access_token: token
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}