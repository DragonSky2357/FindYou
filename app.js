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

//http://localhost:3000/posts/search?option=검색 카테고리&content=검색 내용
//query 형식
app.get("/posts/search/query", async (req, res) => {
    try { 
        let options = []
        console.log(req.param.option);
        if (req.query.option == 'title') { 
            options = [{ title : new RegExp(req.query.content) }]
        } else if (req.query.option == 'contents') {
            options = [{ contents : new RegExp(req.query.content) }]
        } else if (req.query.option == 'uploadDate') {
            options = [{ uploadDate : new RegExp(req.query.content) }]
        } else if (req.query.option == 'title+content+uploadDate') {
            options = [
                { title : new RegExp(req.query.content) },
                { contents : new RegExp(req.query.content) },
                { uploadDate : new RegExp(req.query.content) },
            ]
        } 
        const searchPosts = await Posts.find({ $or: options });
        return res.status(200).json(searchPosts);
    } catch(err) {
        return res.status(400).json({error : err});
    }
});

//param
//http://localhost:3000/posts/search/:param
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

//글 제목으로 삭제 postid도 추가?
//http://localhost:3000/posts/delete/:title
app.delete('/posts/delete/:title', async (req, res) => {
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
        await Posts.deleteMany({ $or: options });
        return res.status(200).json(searchPosts);
    } catch(err) {
        return res.status(400).json({error : err});
    }
    try {
        await Posts.deleteMany({ title : req.body.title });
        res.send('Successfully Deleted!');
    } catch(err) {
        return res.status(500).json({error : err});
    }
});

//제목으로 수정 다 수정할 수 있게 해야하나..?
//수정 중
app.put('/posts/update/:title', async (req, res) => {
    const wantToupdate = await Posts.updateOne({ title : req.body.title } , { contents : res.body.contents });
    console.log(wantToupdate);
    res.send('')
});