const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.genPassword = async function (payload) {
  const { ROUNDS } = process.env;

  const rounds = parseInt(ROUNDS, 10);

  return new Promise(function (resolve, reject) {
    bcrypt.genSalt(rounds, function (err, salt) {
      if (err) reject(err);
      bcrypt.hash(payload, salt, function (err, hash) {
        if (err) reject(err);
        resolve(hash);
      });
    });
  });
};

exports.comparePassword = async function (inputPassword, userPassword) {
  return new Promise(function (resolve, reject) {
    bcrypt.compare(inputPassword, userPassword, function (err, res) {
      if (err) reject(err);
      resolve(res);
    });
  });
};

exports.genJWT = function (user) {
  const { SECRET_KEY, PROVIDER } = process.env;

  const token = jwt.sign(
    {
      type: "JWT",
      department: user.department,
      studentId: user.studentId,
    },
    SECRET_KEY,
    { expiresIn: "30m", issuer: PROVIDER }
  );

  return token;
};
