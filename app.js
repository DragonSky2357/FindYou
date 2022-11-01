const express = require('express');
const mongodb = require('./mongoose');
const Posts = require('./mongoose/schemas/posts');
const bodyParser = require('body-parser');
const app = express();

mongodb.connect();

app.use(bodyParser.json());
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.listen(3000, () => {
    console.log("Running on http://localhost:3000");
});

//http://localhost:3000/posts/all
app.get("/posts", async (req, res) => {
    try { 
        const posts = await Posts.find();
        return res.status(200).json(posts);
    } catch(err) {
        return res.status(500).json({error : err});
    }
    
});

//http://localhost:3000/posts/search/:option/:content
app.get("/posts/search/:option/:content", async (req, res) => {
    try { 
        let options = []
        if (req.body.option == 'title') { 
            options = [{ title : new RegExp(req.body.content) }]
        } else if (req.body.option == 'contents') {
            options = [{ contents : new RegExp(req.body.content) }]
        } else if (req.body.option == 'uploadDate') {
            options = [{ uploadDate : new RegExp(req.body.content) }]
        } else if (req.query.option == 'title+content+uploadDate') {
            options = [
                { title : new RegExp(req.body.content) },
                { contents : new RegExp(req.body.content) },
                { uploadDate : new RegExp(req.body.content) },
            ]
        } 
        const searchPosts = await Posts.find({ $or: options });
        return res.status(200).json(searchPosts);
    } catch(err) {
        return res.status(400).json({error : err});
    }
});

//http://localhost:3000/posts/register
app.post("/posts/register", async (req, res) => {
    try {  
        const newPosts = await Posts.create(req.body.param);
        return res.status(200).json(newPosts);
    } catch(err) {
        return res.status(500).json({error : err});
    }
});

//http://localhost:3000/posts/delete/:title
//로그인한 작성자와 작성자가 일치하면 작성글 중 제목으로 삭제
//작성자랑 제목을 가져와야하나?
app.delete('/posts/delete/:option/:content', async (req, res) => {
    try { 
        let options = []
        if (req.body.option == 'title') { 
            options = [{ title : new RegExp(req.body.content) }]
        } 
        const deletePosts = await Posts.deleteMany({ $or: options });
        res.send('Successfully Deleted!');
        return res.status(200).json(deletePosts);
    } catch(err) {
        return res.status(400).json({error : err});
    }
});

//제목으로 수정 다 수정할 수 있게 해야하나..?
//수정 중
app.put('/posts/update/:title', async (req, res) => {
    const wantToupdate = await Posts.updateOne({ title : req.body.title } , { contents : res.body.contents });
    console.log(wantToupdate);
    res.send('')
});