require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { PORT, MONGO_URI } = process.env;
const { swaggerUi, specs } = require("../swagger/swagger")

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.Promise = global.Promise;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))
app.use("/posts", require("../src/api/routes/posts"));
app.use("/posts", require("../src/api/routes/uploadimage"));

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});