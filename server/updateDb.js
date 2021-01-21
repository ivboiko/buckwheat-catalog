const axios = require("axios");
const config = require("./config.json");
const Goods = require("./moduls/Goods");
const PriceDay = require("./moduls/PriceDay");


module.exports = async () => {
  try {
    const response = await axios.get(config.parserUri);
    await Goods.deleteMany({});
    await Goods.insertMany(response.data);

    let today = new Date();
    today.setHours(0, 0, 0, 0);

    const result = await PriceDay.findOne({day: today});
    // console.log(result)

    if (!result) {
      console.log('false')
      await new PriceDay({
        day: today,
        goods: response.data,
      }).save();
    }

  } catch (e) {
    console.log(e.message);
    throw e;
  }
};