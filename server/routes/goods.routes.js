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

router.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const good = await Good.findById(id);
        res.status(200).send(good);
    } catch (e) {
        res.status(500).json({
            message: "Server has error. Try later"
        });
    }
});

router.post("/createGood", async (req, res) => {

    const good = req.body;
    try {
        const exists = await Good.findOne({name: good.name});

        if (exists) {
            return res.status(400).send(`${good.name} exists`);
        }

        const newGood = await Good.create(good);

        res.status(200).send(newGood);
    } catch (e) {
        res.status(500).json({
            message: "Server has error. Try later"
        });
    }
});

router.patch("/updateGood", async (req, res) => {
    const good = req.body;
    try {
        const updateGood = await Good.findByIdAndUpdate(good._id, good, {
            new: true,
        });

        res.status(200).send(updateGood);
    } catch (e) {
        res.status(500).json({
            message: "Server has error. Try later"
        });
    }
});

router.delete("/:goodId", async (req, res) => {
    const {goodId} = req.params;
    try {
        const removeGood = await Good.findById(goodId);
        await removeGood.remove();

        res.status(200).send(null);
    } catch (e) {
        res.status(500).json({
            message: "Server has error. Try later"
        });
    }
});

module.exports = router;