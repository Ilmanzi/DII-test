const express = require("express");
const router = express.Router();
const userRouter = require("./user")
const authentication = require("../helper/auth")

router.use("/user", userRouter)

module.exports = router