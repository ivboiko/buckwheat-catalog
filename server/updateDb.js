const axios = require("axios");
const config = require("./config.json");
const Goods = require("./moduls/Goods");
//sdf
module.exports = async () => {
  try {
    const response = await axios.get(config.parserUri);
    await Goods.deleteMany({});
    await Goods.insertMany(response.data);
    // console.log(response.data);
  } catch (e) {
    console.log(e.message);
    throw e;
  }
};
