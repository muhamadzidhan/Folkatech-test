const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

module.exports = async (req, res, next) => {
    try {
        let access_token = req.headers.access_token
        if (!access_token) {
            throw { name: 'Unauthenticated' }
        }

        let { id, email } = verifyToken(access_token)

        let user = await User.findByPk(id, {
            attributes: {
                exclude: ["password"],
            },
        })

        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        next(error)
    }
}