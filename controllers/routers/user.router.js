const express = require("express");
const userController  = require("../controllers/user.controller");
const router = express.Router();
const checkAuth = require('../middlewares/check-auth');

router.get("/",checkAuth,userController.getAllUser)

module.exports= router;
