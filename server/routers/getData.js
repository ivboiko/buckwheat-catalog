const express = require("express");
const parser = require("../parser");
const PriceDay = require("../moduls/PriceDay");
const router = express.Router();

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

router.get("/filldb", async (req, res) => {
  let now = +req.params.period;
  let date = new Date();
  date.setHours(0, 0, 0, 0);
  await PriceDay.deleteMany({});
  for (let i = 2; i <= 26; i++) {
    const changNovus = randomInteger(-5, 5);
    const changAuchan = randomInteger(-5, 5);
    const changMegamarket = randomInteger(-5, 5);
    const changVarus = randomInteger(-5, 5);
    const changFurshet = randomInteger(-5, 5);
    const changEkomarket = randomInteger(-5, 5);
    const changCitymarket = randomInteger(-5, 5);

    date.setDate(i);
    await new PriceDay({
      day: date,
      goods: [
        {
          priceForPack: 24.09 + changNovus,
          priceForKg: 60.23 + changNovus*(24.09 + changNovus)/24.09,
          link:
            "https://novus.zakaz.ua/uk/products/04820009102798/krupa-grechka-novus-400g/",
          shop: "novus",
          name: "Крупа гречана Novus ядриця швидкорозварювана 5*80г",
          weight: "400 г",
          brand: "Novus",
        },
        {
          priceForPack: 8.49 + changAuchan,
          priceForKg: 40.05 + changAuchan*(8.49 + changAuchan)/8.49,
          link:
            "https://auchan.zakaz.ua/uk/products/04820168883408/krupa-sto-pudov-212g/",
          shop: "auchan",
          name: "Гречка Сто пудов Дачка 212г",
          weight: "212 г",
          brand: "сто пудов",
        },
        {
          priceForPack: 39.6 + changMegamarket,
          priceForKg: 99 + changMegamarket*(39.6 + changMegamarket)/39.6,
          link:
            "https://megamarket.zakaz.ua/uk/products/04820186600117/krupa-grechka-kulinaro-400g/",
          shop: "megamarket",
          name: "Крупа гречана Culinaro 400г",
          weight: "400 г",
          brand: "Culinaro",
        },
        {
          priceForPack: 28.9 + changVarus,
          priceForKg: 72.25 + changVarus*(28.9 + changVarus)/28.9,
          link:
            "https://varus.zakaz.ua/uk/products/varus02053841900006/krupa-grechka-varto-400g/",
          shop: "varus",
          name: "Крупа Varto гречана ядриця в пакетиках 4шт х 100г",
          weight: "400 г",
          brand: "Varto",
        },
        {
          priceForPack: 24.2 + changFurshet,
          priceForKg: 48.4 + changFurshet*(24.2 + changFurshet)/24.2,
          link:
            "https://furshet.zakaz.ua/uk/products/04820141040026/krupa-grechka-furshet-500g-ukrayina/",
          shop: "furshet",
          name: "Крупа гречана Фуршет 500г",
          weight: "500 г",
          brand: "фуршет",
        },
        {
          priceForPack: 30.09 + changEkomarket,
          priceForKg: 75.22 + changEkomarket*(30.09 + changEkomarket)/30.09,
          link:
            "https://eko.zakaz.ua/uk/products/04820101711065/krupa-grechka-khutorok-panskii-400g-ukrayina/",
          shop: "ekomarket",
          name:
            "Крупа Хуторок Панський гречана ядриця в пакетиках 400г Україна",
          weight: "400 г",
          brand: "Хуторок панський",
        },
        {
          priceForPack: 41.9 + changCitymarket,
          priceForKg: 41.9 + changCitymarket*(41.9 + changCitymarket)/41.9,
          link:
            "https://citymarket.zakaz.ua/uk/products/04820160760325/krupa-grechka-sarkara-produkt-1000g/",
          shop: "citymarket",
          name: "Крупа Саркара продукт гречана ядриця 1кг",
          weight: "1 кг",
          brand: "Саркара Продукт",
        },
      ],
    }).save();
  }
  res.send("Ok");
});

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
  date.setDate(date.getDate() - date.getDay() + 1);
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
