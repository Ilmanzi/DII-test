const { verifyToken } = require("./jwt");
const { User } = require("../models")

async function authentication (req, res, next) {
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];

        if (!token) {
            console.log("Gagal Otentifikasi")
        }

        const data = verifyToken(token);
        const { username } = data;
        const foundUser = await User.findOne({ where: { username }})
        if (!foundUser) {
            console.log("User tidak ada");
        } else {
            req.loggedUser = {
                id: foundUser.id,
                email: foundUser.email,
                username: foundUser.username,
                role: foundUser.role
            }
            next();
        }

    } catch (err) {
        next(err)
    }
}

module.export = authentication