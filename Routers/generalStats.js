const router = require("express").Router();
const statsController = require("./../Controller/statsController");
// register
router.get("/getStats", statsController.getLatestStats);

module.exports = router;
