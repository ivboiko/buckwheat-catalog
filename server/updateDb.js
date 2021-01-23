const axios = require("axios");
const config = require("./config.json");
const PriceDay = require("./moduls/PriceDay");

module.exports = async () => {
  try {
    const response = await axios.get(config.parserUri);
    let today = new Date();
    today.setDate(today.getDate() + 1);
    today.setHours(0, 0, 0, 0);

    const result = await PriceDay.findOne({ day: today });
    console.log(result);

    if (!result) {
      console.log("false");
      await new PriceDay({
        day: today,
        goods: response.data,
      }).save();
    } else {
      console.log("update");
      await PriceDay.updateOne(
        { day: today },
        {
          day: today,
          goods: response.data,
        }
      );
    }
  } catch (e) {
    console.log(e.message);
    throw e;
  }
};
