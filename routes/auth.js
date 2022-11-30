const router = require("express").Router();

//defining routes
router.get("/", (req, res) => {
  res.send("This is a auth routes page");
});

//exporting the router
module.exports = router;
