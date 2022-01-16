const router = require("express").Router();
const postController = require("./../Controller/postController");
// register
router.get("/latestTopics", postController.getLatestTopics);
router.get("/allPostforTopics", postController.getLatestPost);

module.exports = router;
