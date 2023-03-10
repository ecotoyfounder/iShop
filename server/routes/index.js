const express = require("express");
const router = express.Router({mergeParams: true});

router.use("/auth", require("./auth.routes"));
router.use("/user", require("./user.routes"));
router.use("/good", require("./goods.routes"));
router.use("/category", require("./category.routes"));


module.exports = router;