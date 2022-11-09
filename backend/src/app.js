require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const { PORT, MONGO_URI } = process.env;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.Promise = global.Promise;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));

app.use("/user", require("./api/routes/user"));
app.use("/login", require("./api/routes/login"));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
