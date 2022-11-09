const router = require("express").Router();
const utils = require("../../utils/utils");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + "." + file.originalname.split(".")[1]
    );
  },
});

const upload = multer({ storage });

router.get("/single/upload", upload.single("file"), async (req, res) => {
  res.json({ code: 200, data: "Single Upload Ok" });
});

module.exports = router;