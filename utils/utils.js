const bcrypt = require("bcrypt");

exports.genPassword = async function (payload) {
  const { ROUNDS } = process.env;

  const rounds = parseInt(ROUNDS, 10);

  return new Promise(function (resolve, reject) {
    bcrypt.genSalt(rounds, function (err, salt) {
      bcrypt.hash(payload, salt, function (err, hash) {
        if (err) reject(err);
        resolve(hash);
      });
    });
  });
};

exports.genPassword = async function (inputPassword, userPassword) {
  const { ROUNDS } = process.env;

  const rounds = parseInt(ROUNDS, 10);

  return new Promise(function (resolve, reject) {
    if (bcrypt.compare(inputPassword, userPassword)) resolve(true);
  });
};
