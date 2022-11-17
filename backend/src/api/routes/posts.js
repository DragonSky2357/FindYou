const router = require("express").Router();
const Post = require("../../models/posts");

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
        { writer : RegExp(req.params.content) },
        { location : RegExp(req.params.content) }
      ]});
    if (getPostbyString.length > 0) return res.status(200).send(getPostbyString);
    return res.status(404).send({ err: "Can't find posts." });
  } catch (err) {
    res.status(500).send({ error : err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    return res.json(newPost);
  } catch (err) { 
    if(err.code === 11000) res.status(404).send({ err : "Already Exists Posts!"})
    res.status(500).send({ err });
  }
});

router.put("/:postId", async (req, res) => {
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
router.delete("/:postId", async (req, res) => {
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