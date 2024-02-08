const { signToken } = require("../helper/jwt");
const { User } = require("../models")

class UserController {
    static async register (req, res, next) {
        try {
            const { email, username, password, role } = req.body;
            const user = await User.create({
                email, username, password, role
            })
            res.status(201).json(user);
        } catch (err) {
            next(err)
        }
    }

    static async login(req, res, next) {
        try {
            const { username, password } = req.body
            const user = await User.findOne({ where: { username }})
            if (!user) {
                res.status(404).json({ message: "Username tidak ditemukan"})
            }
            if (password == user.password) {
                const accessToken = signToken({
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    role: user.role
                })
    
                res.status(200).json({
                    id: user.id,
                    access_token: accessToken,
                    email: user.email,
                    role: user.role
                })

            } else {
                res.status(404).json({ message: "Password tidak sesuai"})
            }


        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController