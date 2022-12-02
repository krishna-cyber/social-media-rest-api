const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

//defining routes
router.get("/", (req, res) => {
  res.send("This is a user routes page");
});

//update a user
router.put("/:id", async (req, res) => {
  if (req.body.userId || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        res.status(500).json(error);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id);
      res.status(200).json("Account has been updated");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    return res.status(403).send("You can update only your account!");
  }
});
//delete a user
router.delete("/:id", async (req, res) => {
  if (req.body.userId || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    return res.status(403).send("You can delete only your account!");
  }
});
//get a user
//follow a user
//unfollow a user

module.exports = router;
