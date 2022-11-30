const router = require("express").Router();

//defining routes
router.get("/", (req, res) => {
  res.send("This is a user routes page");
});

module.exports = router;
