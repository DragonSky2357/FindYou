const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

exports.auth = (req, res, next) => {
  const { SECRET_KEY } = process.env;

  try {
    req.decode = jwt.verify(req.headers.authorization, SECRET_KEY);

    return next();
  } catch (err) {
    // 유효시간 초과
    if (err.name === "TokenExpiredError") {
      return res.status(419).json({
        code: 419,
        message: "Token has expired",
      });
    }

    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({
        code: 401,
        message: "Invalid token",
      });
    }
  }
};