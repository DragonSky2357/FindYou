const router = require("express").Router();
const User = require("../../models/user");
const utils = require("../../utils/utils");
const { auth } = require("../../middleware/middleware");

/**
 * @swagger
 * paths:
 *  /user/nickname:
 *   post:
 *    tags:
 *    - user
 *    description: 닉네임 조회
 *    parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      schema:
 *       properties:
 *        id:
 *         type: string
 *        pw:
 *         type: string
 *
 *    responses:
 *     200:
 *      description: 닉네임 조회 성공
 *      schema:
 *       properties:
 *        message:
 *         type: string
 *     401:
 *      description: 닉네임 조회 실패
 *      schema:
 *       properties:
 *        message:
 *         type: string
 *
 */

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

// Login User
router.post("/login", async (req, res) => {
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

router.post("/payload", auth, (req, res) => {
  return res.status(200).json({
    code: 200,
    message: "token true",
    data: req.decode,
  });
});

module.exports = router;
