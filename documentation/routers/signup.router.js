const express = require("express");
const userController  = require("../controllers/signup.controller");
const router = express.Router();

router.post("/",userController.craeteUser)

module.exports= router;
