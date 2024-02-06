const express = require("express");
const router = express.Router();
const controller = require("../controllers/config");

router.get('/config', controller.getConfig);

module.exports = router;