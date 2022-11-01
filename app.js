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
        const deletePosts = await Posts.deleteOne({ $or: options });
        return res.status(200).json(deletePosts);
    } catch(err) {
        return res.status(400).json({error : err});
    }
});

//제목으로 수정 다 수정할 수 있게 해야하나..?
app.put('/posts/update/:option/:content/:updatecontent', async (req, res) => {
    try { 
        let options = []
        let updateContent = []
        console.log(req.body);
        if (req.body.option === 'title') { 
            options = { title : req.body.content };
            updateContent = { title : req.body.updatecontent };
        } else if (req.body.option === 'contents') {
            options = { contents : req.body.content }
            updateContent = { contents : req.body.updatecontent };
        } else if (req.body.option === 'img') {
            options = { img : req.body.content }
            updateContent = { img : req.body.updatecontent };
        } else if (req.body.option === 'location') {
            options = { location : req.body.content }
            updateContent = { location : req.body.content };
        }
        console.log(updateContent);
        const updatePosts = await Posts.updateOne( options ,  {$set : updateContent} );
        return res.status(200).json(updatePosts);
    } catch(err) {
        return res.status(400).json({error : err});
    }
});