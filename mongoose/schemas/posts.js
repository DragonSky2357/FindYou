const mongoose = require('mongoose');

const { Schema } = mongoose;
const postsSchema = new Schema({
    postId : {
        required : true,
        type : Number,
        unique : true
    },
    img : {
        type : String,
    },
    title : {
        type : String,
        required : true
    },
    contents : {
        type : String,
        required : true
    },
    writer : { 
        type : String,
        required : true
    },
    location : {
        type : String
    },
    uploadDate : {
        type : String,
        required : true
    },
})

const Posts = mongoose.model('Posts', postsSchema);
module.exports = Posts;