const axios = require("axios");
const cheerio = require("cheerio");
let link = require("./link.json");

const getPage = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 Edg/87.0.664.75",
      },
    });

    return response.data;
  } catch (e) {
    throw e;
  }
};


const parseBrand = async (url) => {
  const html = await getPage(url);
  const $ = cheerio.load(html);
  const brand= $(".BigProductCardTrademarkName").text();
  return brand;


};

const parseCard = async (card, shop, url) => {
  let priceForKg = 0;
  const priceForPack = +card.find(".Price__value_caption").text();
  const weight = +card.find(".product-tile__weight").text().split(" ")[0];

  if (card.find(".product-tile__weight").text() !== "1 кг") {
    priceForKg = +((1000 * priceForPack) / weight).toFixed(2);
  }

  const link = url.split("/uk/")[0] + card.find("a").attr("href");

  const brand = await parseBrand(link);

  return {
    priceForPack,
    priceForKg,
    link,
    shop,
    name: card.find(".product-tile__title").text(),
    weight,
    brand, 
  };

  
};


const getDataPage = async (url, shop) => {

  const html = await getPage(url);
  const $ = cheerio.load(html);
  const cardsOnPage = parseCard($(".products-box__list-item").first(),shop,url);
  return cardsOnPage;
  /*cardsOnPage.forEach((item) => {
    data.push(parseCard(item, shop, url));
  });*/
};

module.exports = async () => {
  let allCards = [];
  // затримка?
  for (const key in link) {
    const cards = await getDataPage(link[key], key);
    allCards.push(cards);
  }

  return allCards;
};
