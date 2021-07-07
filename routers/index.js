const express = require("express");
const router = express.Router();
const sinupRouter = require("./signup.router")
const loginRouter = require("./login.router")
const forgetPasswordRouter = require("./Forgot_password.router.js.js")
const userRouter = require("./user.router")

router.use('/signup',sinupRouter)
router.use('/signin',loginRouter)
router.use("/forgetPassword",forgetPasswordRouter)
router.use("/user",userRouter)

module.exports=router