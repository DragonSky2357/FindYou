const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema(
    { 
        title : { type : String, required : true },
        contents : { type : String, required : true },
        userId : { type : String, required : true },
        img : { type : String },
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

postsSchema.statics.findOneByuserId = function (userId) {
    return this.find({ userId });
};

postsSchema.statics.findByuserId = function (userId) {
    return this.find({ userId });
};

module.exports =  mongoose.model('Posts', postsSchema);