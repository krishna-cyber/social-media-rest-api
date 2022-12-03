const router = require("express").Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  res.send("Hello World");
});

//create a post
//update a post
//delete a post
//like a post
//get a post
//get timeline posts
module.exports = router;
