const router = require("express").Router();
const utils = require("../../utils/utils");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");

// Login User
router.post("/", async (req, res) => {
  const { id, password } = req.body;

  if (!id || !password)
    return res.status(200).send({ err: "Require Id or Password" });

  try {
    const user = await User.find({ id });
    if (!user.length) return res.status(200).send({ err: "User not found!" });

    const comparePassword = await utils.comparePassword(
      password,
      user[0].password
    );

    if (!comparePassword)
      return res.status(200).send({ err: "Wrong Password" });

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send({ err });
  }
});

module.exports = router;
