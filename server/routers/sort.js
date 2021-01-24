const express = require("express");

const router = express.Router();
const PriceDay = require("../moduls/PriceDay");

const convector = (data) => {
  const newData = data.map((item) => {
    return item.goods;
  });
  return newData;
};

const formatDate = (date) => {
  let month = "" + (date.getMonth() + 1),
    day = "" + date.getDate(),
    year = date.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

router.get("/:period", async (req, res) => {
  try {
    console.log("sort");
    const date = new Date();
    const today = formatDate(date);
    let startDate = "";
    let data = null;

    switch (req.params.period) {
      case "week":
        let decrement = date.getDay() != 0 ? date.getDay() + 1 : 6;
        date.setDate(date.getDate() - decrement);
        startDate = formatDate(date);
        console.log(startDate);
        break;

      case "month":
        date.setDate(1);
        startDate = formatDate(date);
        break;

      case "year":
        date.setHours(0, 0, 0, 0);
        let months = [date];

        for (let i = 0; i < 12; i++) {
          let month = new Date();
          month.setDate(2);
          month.setHours(0, 0, 0, 0);
          month.setMonth(i);
          months.push(month);
        }

        data = await PriceDay.find(
          {
            day: {
              $in: months,
            },
          },
          { _id: false, goods: true }
        ).sort({ day: 1 });

        const result = convector(data);

        return res.json(result);

      default:
        return res.status(404).json({ message: "period not found" });
    }

    data = await PriceDay.find(
      { day: { $gte: startDate, $lte: today } },
      { _id: false, goods: true }
    ).sort({ day: 1 });

    const result = convector(data);

    res.json(result);
  } catch (e) {
    res.status(404).json({ message: "bad request" });
  }
});

module.exports = router;
