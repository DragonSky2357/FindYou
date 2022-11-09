const router = require("express").Router();
const utils = require("../../utils/utils");
const User = require("../../models/user");

// Login User
router.post("/", async (req, res) => {
  const { id, password } = req.body;

  if (!id || !password)
    return res.status(200).send({ err: "Require Id or Password" });

  try {
    const user = await User.findOne({ id });
    if (!user) return res.status(200).send({ err: "User not found!" });

    const comparePassword = await utils.comparePassword(
      password,
      user.password
    );

    if (!comparePassword)
      return res.status(200).send({ err: "Wrong Password" });

    const token = utils.genJWT(user);

    res.status(200).json({ code: 200, message: "token created", token });
  } catch (err) {
    console.log(err);
    res.status(500).send({ err });
  }
});

module.exports = router;
