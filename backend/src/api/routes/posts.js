const router = require("express").Router();
const Post = require("../../models/posts");
const utils = require("../../utils/utils");
const { auth } = require("../../middleware/middleware");

/** 
  * @swagger 
  * paths: 
  *  /posts: 
  *   get: 
  *    tags: 
  *    - Posts
  *    description: 모든 게시글 정보 가져오기 
  *    responses: 
  *     200: 
  *      description: 모든 게시글 정보 
  *      content: 
  *        application/json: 
  *          schema: 
  *            type: object 
  *            properties: 
  *              sucess: 
  *                type: boolean 
  *                example: true 
  *              message: 
  *                type: string 
  *                example: "Get Posts Sucess" 
  *              data: 
  *                type: object 
  *                example: [{"title":"find you!","contents":"please find me!","userId":"20175129","img":"이미지.img", "location" : "빽다방"}] 
  *       
  *     401: 
  *      description: 게시글 조회 실패 
  *      content: 
  *        application/json: 
  *          schema: 
  *            type: object 
  *            properties: 
  *              sucess: 
  *                type : boolean 
  *                example: false 
  *              message: 
  *                type: string 
  *                example: "Get Posts Failed" 
  *       
  * 
  */ 


router.get("/", (req, res) => {
  Post.findAll()
    .then((posts) => {
      if (!posts.length) return res.status(404).send({ err: "There's no Posts." });
        res.status(200).send(posts);
    })
    .catch((err) => {
      res.status(500).send({ err });
    });
});

router.get("/:content", async (req, res) => {
  try {
    const getPostbyString = await Post.find({
        $or : [
        { title : RegExp(req.params.content) },
        { contents : RegExp(req.params.content) },
        { userId : RegExp(req.params.content) },
        { location : RegExp(req.params.content) }
      ]});
    if (getPostbyString.length > 0) return res.status(200).send(getPostbyString);
    return res.status(404).send({ err: "Can't find posts." });
  } catch (err) {
    res.status(500).send({ error : err });
  }
});

/**
 * @swagger
 *  /posts/new:
 *    post:
 *      tags:
 *      - posts
 *      description: 게시글 작성
 *      
 *      requestBody:
 *        description: 게시글 정보
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  description: "제목"
 * 
 *                contents:
 *                  type: String
 *                  description: "내용"
 *            
 *                userId:
 *                  type: string
 *                  description: "유저 아이디"
 * 
 *                img:
 *                  type: string
 *                  description: "이미지 경로"
 *                
 *                location:
 *                  type: string
 *                  description: "분실 및 습득 장소"
 * 
 *        
 *
 */

router.post("/new", async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    return res.json(newPost);
  } catch (err) { 
    if(err.code === 11000) res.status(404).send({ err : "Already Exists Posts!"})
    res.status(500).send({ err });
  }
});

router.patch("/", async (req, res, err) => {
  try {
    const userId = req.body.userId;
    const getPost = await Post.findByuserId(userId);
    if (getPost.length > 0) {
      const updatePost = await Post.updateOne({ userId : req.body.userId }, { $set : req.body });
      console.log(updatePost);
      return res.status(200).send(updatePost);
    }
    return res.status(404).send({ err: "Can't find posts." });
  } catch {
    res.status(500).send({ err })
  }
}); 

router.delete("/", auth, async (req, res) => {
  try {
    const getPost = await Post.find( req.body );
    if (getPost.length > 0) {
      const deletedPost = await Post.deleteOne( req.body );
      console.log(deletedPost);
      return  res.status(200).send('Successfully Deleted!')
    }
    else return res.status(404).send({ err: "Can't find posts." });    
  } catch (err) {
    res.status(500).send({ err })
  }
});

module.exports = router;