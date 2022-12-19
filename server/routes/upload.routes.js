import {Router} from "express";

const uploadMiddleware = require("../middleware/uploadFile.middleware");

const router = Router();

router.post("/upload", uploadMiddleware.single("photo"), (req, res) => {
    try {
        if (req.file) {
            // res.json(req.file);
            res.file.path();
        }
    } catch (e) {
        console.log(e);
    }
});