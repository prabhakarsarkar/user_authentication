const express = require('express');
const router = express.Router();
const signinController = require('../controllers/login.controller');

router.post("/",signinController.signin);


module.exports = router;