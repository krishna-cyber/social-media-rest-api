const router = require("express").Router();
const User = require("../models/User");

//defining routes
router.get("/", (req, res) => {
  res.send("This is a auth routes page");
});

//Register
router.post("/register", async (req, res) => {
  const user = await new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  await user
    .save()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });

  //sending response
  res.status(200).send("registered");
});
//exporting the router
module.exports = router;
