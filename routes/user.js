const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

// Find All User
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    if (!users.length) return res.status(404).send({ err: "User not found!" });

    res.status(200).json(users);
  } catch (err) {
    res.status(500).send({ err });
  }
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

// 학생 정보 수정
router.patch("/:studentId", async (req, res) => {
  try {
    const studentId = parseInt(req.params.studentId);
    const studentInfo = req.body;

    const findUser = await User.findOneByStudentid(studentId);
    if (findUser === null)
      return res.status(404).send({ err: "Not Found User" });

    const updatedUser = await User.updateOne(
      { studentId },
      { $set: studentInfo }
    );
    return res.json(updatedUser);
  } catch (err) {
    res.status(500).send({ err });
  }
});

// 학생 삭제
router.delete("/:studentId", async (req, res) => {
  try {
    const studentId = parseInt(req.params.studentId);

    const findUser = await User.findOneByStudentid(studentId);
    if (findUser === null)
      return res.status(404).send({ err: "Not Found User" });

    const deletedUser = await User.deleteOne({ studentId });

    return res.json(deletedUser);
  } catch (err) {}
});
module.exports = router;
