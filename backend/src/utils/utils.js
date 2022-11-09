const bcrypt = require("bcrypt");

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
