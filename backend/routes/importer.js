const express = require("express");
const router = express.Router();
const controller = require("../controllers/importer");

router.get('/bgg/collection', controller.importCollection);
router.get('/bgg/profile', controller.importProfile)
router.get('/bgg/game', controller.importGame);
router.get('/search', controller.searchTitles);

module.exports = router;