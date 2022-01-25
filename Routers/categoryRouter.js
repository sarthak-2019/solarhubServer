const router = require("express").Router();
const categoryController = require("./../Controller/categoryController");
// register
router.get("/allCategories", categoryController.getAllCategories);

module.exports = router;
