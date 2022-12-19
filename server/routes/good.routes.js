const express = require("express");
const Good = require("../models/Good");
const router = express.Router({mergeParams: true});

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

module.exports = router;