const express = require('express');
const router = express.Router();
const ForgotPasswordController = require('../controllers/Forgot_password.controller.js');

router.post("/",ForgotPasswordController.CheckEmailForForgetPassword);


module.exports = router;