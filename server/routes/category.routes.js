const express = require("express");
const Category = require("../models/Category");
const router = express.Router({mergeParams: true});

router.get("/", async (req, res) => {
    try {
        const list = await Category.find();
        res.status(200).send(list);
    } catch (e) {
        res.status(500).json({
            message: "Server has error. Try later"
        });
    }
});

router.post("/createCategory", async (req, res) => {

    const category = req.body;
    try {
        const exists = await Category.findOne({name: category.name});

        if (exists) {
            return res.status(400).send(`${category.name} exists`);
        }

        const newCategory = await Category.create(category);

        res.status(200).send(newCategory);
    } catch (e) {
        res.status(500).json({
            message: "Server has error. Try later"
        });
    }
});

router.patch("/updateCategory", async (req, res) => {
    const category = req.body;
    try {
        const updateCategory = await Category.findByIdAndUpdate(category._id, category, {
            new: true,
        });

        res.status(200).send(updateCategory);
    } catch (e) {
        res.status(500).json({
            message: "Server has error. Try later"
        });
    }
});

router.delete("/:categoryId", async (req, res) => {
    const {categoryId} = req.params;
    try {
        const removeCategory = await Category.findById(categoryId);
        await removeCategory.remove();

        res.status(200).send(null);
    } catch (e) {
        res.status(500).json({
            message: "Server has error. Try later"
        });
    }
});


module.exports = router;