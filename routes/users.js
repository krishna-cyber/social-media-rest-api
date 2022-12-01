const router = require("express").Router();
const bcrypt = require("bcrypt");

//defining routes
router.get("/", (req, res) => {
  res.send("This is a user routes page");
});

//update a user
router.put("/:id", async (req, res) => {
  if (req.body.userId || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const { password } = req.body;
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      } catch (error) {
        res.status(500).json(error);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    return res.status(403).send("You can update only your account!");
  }
});
//delete a user
//get a user
//follow a user
//unfollow a user

module.exports = router;
