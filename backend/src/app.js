require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {swaggerUi,specs} = require("./swagger/swagger");

const app = express();

const { PORT, MONGO_URI } = process.env;

app.use(cors());

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.Promise = global.Promise;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));

app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(specs));
/**
 * @swagger
 *  tags:
 *    name: User
 *    description: 유저 회원가입 및 로그인
*/
app.use("/user", require("./api/routes/user"));
app.use("/posts", require("./api/routes/posts"));
app.use("/uploadimage", require("./api/routes/uploadimage"));

app.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});
