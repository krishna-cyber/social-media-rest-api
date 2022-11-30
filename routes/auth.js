const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
//defining routes
router.get("/", (req, res) => {
  res.send("This is a auth routes page");
});

//Register
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    newUser
      .save()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
});

//login route
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    !user && res.status(404).send("user not found");

    //checking valid password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).send("wrong password");

    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
});
//exporting the router
module.exports = router;
