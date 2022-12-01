const router = require("express").Router();

//defining routes
router.get("/", (req, res) => {
  res.send("This is a user routes page");
});

//update a user
//delete a user
//get a user
//follow a user
//unfollow a user

module.exports = router;
