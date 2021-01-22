const express = require('express');
const parser = require("../parser");
const PriceDay = require("../moduls/PriceDay");
const router = express.Router();

router.get("/parse", async (req, res) => {
    const data = await parser();
    res.json(data);
});

router.get("/goods", async (req, res) => {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    const data = await PriceDay.findOne({day: today});
    res.json(data);
});

module.exports = router;