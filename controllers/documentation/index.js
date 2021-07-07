const express = require('express');
const router = express()
const swaggerUi = require("swagger-ui-express");

const swaggerDocs = require('./swagger.json')
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


module.exports = router;