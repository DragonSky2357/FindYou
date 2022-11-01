const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

// Find All User
router.get("/", (req, res) => {
  User.findAll()
    .then((users) => {
      if (!users.length)
        return res.status(404).send({ err: "User not found!" });
      res.send(`find successfully: ${users}`);
    })
    .catch((err) => {
      res.status(500).send({ err });
    });
});

// Find User By StudentId
router.get("/:studentId", async (req, res) => {
  try {
    const findUser = await User.findOneByStudentid(req.params.studentId);

    if (findUser === null)
      return res.status(404).send({ err: "Not Found User" });

    return res.json(findUser);
  } catch (err) {
    res.status(500).send({ err });
  }
});

// Create User
router.post("/", async (req, res) => {
  try {
    const findUser = await User.findOneByStudentid(req.body.studentId);

    if (findUser) return res.status(400).send({ err: "Already Exist User" });

    const user = await User.create(req.body);

    return res.json(user);
  } catch (err) {
    res.status(500).send({ err });
  }
});

module.exports = router;
