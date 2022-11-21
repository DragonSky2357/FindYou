const router = require("express").Router();
const User = require("../../models/user");
const utils = require("../../utils/utils");
const { auth } = require("../../middleware/middleware");

/**
 * @swagger
 * paths:
 *  /user:
 *   get:
 *    tags:
 *    - user
 *    description: 모든 유저 정보 가져오기
 *    responses:
 *     200:
 *      description: 모든 유저 정보
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              sucess:
 *                type: boolean
 *                example: true
 *              message:
 *                type: string
 *                example: "Get Users Sucess"
 *              data:
 *                type: object
 *                example: [{"department":"컴퓨터소프트웨어공학과","studentId":"20174041","email":"test@naver.com","nickname":"dragonsky"},
 *                          {"department":"의료IT공학과","studentId":"20175129","email":"test@gmail.com","nickname":"yongbum kim"}]
 *      
 *     401:
 *      description: 전체 유저 조회 실패
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              sucess:
 *                type : boolean
 *                example: false
 *              message:
 *                type: string
 *                example: "Get Users Failed"
 *      
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

/**
 * @swagger
 *  /user/{studentId}:
 *    get:
 *      tags:
 *      - user
 *      description: 학번에 해당하는 유저 정보 가져오기
 *      
 *      parameters:
 *      - in: path
 *        name: studentId
 *        required: true
 *        description: 학번
 *        schema:
 *          type: string
 *        example: 20174041
 * 
 *    responses:
 *     200:
 *      description: 해당 학생 정보
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              sucess:
 *                type: boolean
 *                example: true
 *              message:
 *                type: string
 *                example: "Get User Sucess"
 *              data:
 *                type: object
 *                example: [{"department":"컴퓨터소프트웨어공학과","studentId":"20174041","email":"test@naver.com","nickname":"dragonsky"}]
 *      
 *     401:
 *      description: 유저 조회 실패
 *      schema:
 *       properties:
 *        sucess:
 *          type : boolean
 *          example: false
 *        message:
 *          type: string
 *          example: "Get User Failed"
 *      
 *
 */

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

/**
 * @swagger
 *  /user/new:
 *    post:
 *      tags:
 *      - user
 *      description: 회원가입
 *      
 *      requestBody:
 *        description: 회원가입 정보
 *        required: ture
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                department:
 *                  type: string
 *                  description: "학과"
 * 
 *                studentId:
 *                  type: integer
 *                  description: "학번"
 *            
 *                id:
 *                  type: string
 *                  description: "아이디"
 * 
 *                password:
 *                  type: string
 *                  description: "비밀번호"
 *                
 *                email:
 *                  type: string
 *                  format: email
 *                  description: "이메일"
 * 
 *                nickname:
 *                  type: string
 *                  description: "닉네임"
 *                
 * 
 *        
 *
 */

// Create User
router.post("/new", async (req, res) => {
  try {
    const findUser = await User.findOneByStudentid(req.body.studentId);

    if (findUser) return res.status(400).send({ err: "Already Exist User" });

    const user = await User.create(req.body);

    return res.json(user);
  } catch (err) {
    res.status(500).send({ err });
  }
});

/**
 * @swagger
 *  /user/{studentId}:
 *    patch:
 *      tags:
 *      - user
 *      description: 회원정보 수정
 *      
 *      requestBody:
 *        description: 회원정보 수정
 *        required: ture
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                department:
 *                  type: string
 *                  description: "학과"
 * 
 *                password:
 *                  type: string
 *                  description: "비밀번호"
 *                
 *                email:
 *                  type: string
 *                  format: email
 *                  description: "이메일"
 * 
 *                nickname:
 *                  type: string
 *                  description: "닉네임"
 *                
 *    responses:
 *     200:
 *      description: 해당 학생 정보
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              sucess:
 *                type: boolean
 *                example: true
 *              message:
 *                type: string
 *                example: "Get User Sucess"
 *              data:
 *                type: object
 *                example: [{"department":"컴퓨터소프트웨어공학과","studentId":"20174041","email":"test@naver.com","nickname":"dragonsky"}]
 *      
 *     401:
 *      description: 유저 조회 실패
 *      schema:
 *       properties:
 *        sucess:
 *          type : boolean
 *          example: false
 *        message:
 *          type: string
 *          example: "Get User Failed"

 *        
 *
 */

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


/**
 * @swagger
 *  /user/{studentId}:
 *    delete:
 *      tags:
 *      - user
 *      description: 회원 삭제
 *      
 *      requestBody:
 *        description: 회원 삭제
 *        required: ture
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                department:
 *                  type: string
 *                  description: "학과"
 * 
 *                password:
 *                  type: string
 *                  description: "비밀번호"
 *                
 *                email:
 *                  type: string
 *                  format: email
 *                  description: "이메일"
 * 
 *                nickname:
 *                  type: string
 *                  description: "닉네임"
 *                
 *    responses:
 *     200:
 *      description: 해당 학생 정보
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              sucess:
 *                type: boolean
 *                example: true
 *              message:
 *                type: string
 *                example: "Get User Sucess"
 *              data:
 *                type: object
 *                example: [{"department":"컴퓨터소프트웨어공학과","studentId":"20174041","email":"test@naver.com","nickname":"dragonsky"}]
 *      
 *     401:
 *      description: 유저 조회 실패
 *      schema:
 *       properties:
 *        sucess:
 *          type : boolean
 *          example: false
 *        message:
 *          type: string
 *          example: "Get User Failed"

 *        
 *
 */

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

/**
 * @swagger
 *  /user/login:
 *    post:
 *      tags:
 *      - user
 *      description: 로그인
 *      
 *      requestBody:
 *        description: 로그인
 *        required: ture
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                  description: "아이디"
 * 
 *                password:
 *                  type: string
 *                  description: "비밀번호"
 *                
 *    responses:
 *     200:
 *      description: 해당 학생 정보
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              sucess:
 *                type: boolean
 *                example: true
 *              message:
 *                type: string
 *                example: "Get User Sucess"
 *              data:
 *                type: object
 *                example: [{"department":"컴퓨터소프트웨어공학과","studentId":"20174041","email":"test@naver.com","nickname":"dragonsky"}]
 *      
 *     401:
 *      description: 유저 조회 실패
 *      schema:
 *       properties:
 *        sucess:
 *          type : boolean
 *          example: false
 *        message:
 *          type: string
 *          example: "Get User Failed"

 *        
 *
 */
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
