const express = require('express');

const router = express.Router();
const PriceDay = require("../moduls/PriceDay");

const formatDate = (date) => {
    let month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

router.get("/:period", async (req, res) => {

    const date = new Date();
    const today = formatDate(date);
    let startDate = '';
    let data = null;

    switch (req.params.period) {
        case "week":
            date.setDate(date.getDate() - date.getDay() + 1);
            startDate = formatDate(date);
            break;

        case "month":
            date.setDate(1);
            startDate = formatDate(date);
            break;

        case "year":
            date.setDate(1);
            date.setMonth(0);
            startDate = formatDate(date);
            break;

        default:
            return res.status(404).json({message: "period not found"});
    }

    data = await PriceDay.find({day: {$gte: startDate, $lte: today}}, {_id: false, goods: true});
    res.json(data);
});


module.exports = router;