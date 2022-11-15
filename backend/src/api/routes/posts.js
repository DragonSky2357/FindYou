const router = require("express").Router();
const Post = require("../../models/posts");

/**
 @swagger
 paths:
  /posts:
    get:
      summary: 게시글 데이터 전체조회
      description: 전체 게시글 데이터 조회
      tags: [posts]
      responses:
        "200":
          description: "전체 게시글 정보 조회 성공"
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

//http://localhost:3000/posts/:postId => find post by id
router.get("/:postId", async (req, res) => {
  try {
    const getPostId = await Post.findOneByPostid(req.params.postId);
    console.log(getPostId);
    if (getPostId.length > 0) return res.status(200).send(getPostId);
    return res.status(404).send({ err: "Can't find posts." });
  } catch (err) {
    res.status(500).send({ error : err });
  }
});

//http://localhost:3000/posts/newposts => new post
router.post("/newposts", async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    return res.json(newPost);
  } catch (err) { 
    if(err.code === 11000) res.status(404).send({ err : "Already Exists Posts!"})
    res.status(500).send({ err });
  }
});

//http://localhost:3000/posts/updateposts => Update post by id
router.put("/updateposts", async (req, res) => {
  try {
    const postId = parseInt(req.body.postId);
    const getPost = await Post.findOneByPostid(postId);
    if (getPost.length > 0) {
      const updatePost = await Post.updateOne({ postId : req.body.postId }, { $set : req.body });
      console.log(updatePost);
      return res.status(200).send(updatePost);
    }
    return res.status(404).send({ err: "Can't find posts." });
  } catch {
    res.status(500).send({ err })
  }
}); 

//http://localhost:3000/posts/deleteposts => delete post by id
router.delete("/deleteposts/:postId", async (req, res) => {
  try {
    const postId = parseInt(req.params.postId);
    const getPost = await Post.findOneByPostid(postId);
    if (getPost.length > 0) {
      const deletedPost = await Post.deleteOne({ postId });
      return  res.status(200).send('Successfully Deleted!')
    }
    else return res.status(404).send({ err: "Can't find posts." });    
  } catch (err) {
    res.status(500).send({ err })
  }
});

module.exports = router;