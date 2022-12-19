const express = require("express");
const Good = require("../models/Good");
const router = express.Router({mergeParams: true});

// const upload = multer({
//     storage: Storage
// }).single("abcCards");

router.get("/", async (req, res) => {
    try {
        const list = await Good.find();
        res.status(200).send(list);
    } catch (e) {
        res.status(500).json({
            message: "Server has error. Try later"
        });
    }
});

// router.post("/upload", async (req, res) => {
//     try {
//         upload(req, res, (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 const newGood = new Good({
//                     name: req.body.name,
//                     image: {
//                         data: req.file.filename,
//                         contentType: "image/png"
//                     }
//                 });
//                 newGood.save()
//                     .then(() => res.send("successfully uploaded"))
//                     .catch(err => console.log(err));
//             }
//         });
//     } catch (e) {
//
//     }
// });

module.exports = router;