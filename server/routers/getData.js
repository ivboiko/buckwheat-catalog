const express = require("express");
const parser = require("../parser");
const PriceDay = require("../moduls/PriceDay");
const router = express.Router();

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

router.get("/parse", async (req, res) => {
  const data = await parser();
  res.json(data);
});

router.get("/goods", async (req, res) => {
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  const data = await PriceDay.findOne({ day: today });
  res.json(data);
});

const ymwd = async (date, day) => {
  const dayData = await PriceDay.findOne({ day: date });
  // console.log(dayData)
  let newObj = JSON.parse(JSON.stringify(dayData));
  if (newObj) {
    // console.log(false)
    newObj["day"] = day;
  }

  console.log(newObj);

  return newObj;
};
//year, month, week, day
router.get("/ymwd", async (req, res) => {
  let data = [];
  let date = new Date();

  //day
  date.setDate(date.getDate() + 1);
  date.setHours(0, 0, 0, 0);
  const now = await ymwd(date, "now");
  data.push(now);

  // week
  date.setDate(date.getDate() - date.getDay() + 2);
  const week = await ymwd(date, "week");
  data.push(week);

  // month
  date.setDate(2);
  const month = await ymwd(date, "month");
  data.push(month);

  // year
  // date.setDate(2);
  date.setMonth(0);
  const year = await ymwd(date, "year");
  data.push(year);

  res.json(data);
});

module.exports = router;
