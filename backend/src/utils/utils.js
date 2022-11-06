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
  const { ROUNDS } = process.env;

  const rounds = parseInt(ROUNDS, 10);

  return new Promise(function (resolve, reject) {
    if (bcrypt.compare(inputPassword, userPassword)) resolve(true);
  });
};
