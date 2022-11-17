const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema(
    {
        userId : { type : String, unique : true, required : true },
        img : { type : String },
        title : { type : String, required : true },
        contents : { type : String, required : true },
        writer : { type : String, required : true },
        location : { type : String }
    }, 
    { timestamps : true }
);

postsSchema.statics.create = async function (payload) {
    const newPosts = {
      ...payload,
    };
    const post = new this(newPosts);
    return post.save();
  };

postsSchema.statics.findAll = function () {
    return this.find({});
};

postsSchema.statics.findOneByPostid = function (postId) {
    return this.find({postId});
};

module.exports =  mongoose.model('Posts', postsSchema);