const multer = require('multer');
const path = require('path');
const router = require('express').Router();
const express = require('express')

router.use(express.json({
    limit : '50mb'
}));

const storage = multer.diskStorage({
    destination : function(req, res, cb) {
        cb(null, 'uploads/')
    },
    filename : function(req, res, cb) {
        cb(null, 
        file.fieldname + "-" + new Date() + "." + path.extname(file.origianlname));
    }
})

const upload = multer({ storage : storage });

router.post('/uploadimg', upload.single('file'), function(req, res) {
    return res.json({ code : 200, data : "Image Uploaded!"});
})

router.post('/uploadimgs', upload.array('file', 10), function(req, res) {
    console.log(req.files);
    return res.json({ code : 200, data : "Image Uploaded!"});
})

module.exports = router;
