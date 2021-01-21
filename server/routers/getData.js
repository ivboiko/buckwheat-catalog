const express = require('express');
const parser = require("../parser");
const Goods = require("../moduls/Goods");
const router = express.Router();

router.get("/parse", async (req, res) => {
    const data = await parser();
    res.json(data);
});

router.get("/goods", async (req, res) => {
    const data = await Goods.find({});
    res.json(data);
});

module.exports = router;