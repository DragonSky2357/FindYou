const mongoose = require("mongoose");
const utils = require("../utils/utils");
const userSchema = new mongoose.Schema(
  {
    department: { type: String, required: true },
    studentId: { type: Number, required: true, unique: true },
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    nickname: { type: String, required: true, unique: true },
  },
  { timestames: true }
);

userSchema.statics.create = async function (payload) {
  const hashedPassword = await utils.genPassword(payload.password);

  const newUser = {
    ...payload,
    password: hashedPassword,
  };

  const user = new this(newUser);

  return user.save();
};

userSchema.statics.findAll = function () {
  return this.find({});
};

userSchema.statics.findOneByStudentid = function (studentId) {
  return this.findOne({ studentId });
};

module.exports = mongoose.model("User", userSchema);
