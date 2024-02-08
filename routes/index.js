const express = require("express");
const router = express.Router();
const userRouter = require("./user")
const jadwalRouter = require("./jadwal")
const authentication = require("../helper/auth")

router.use("/user", userRouter)
router.use(authentication)
router.use("/jadwal", jadwalRouter)

module.exports = router