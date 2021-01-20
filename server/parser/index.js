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

const getAllCards = (html) => {
  try {
    const $ = cheerio.load(html);
    let cards = [];
    $(".products-box__list-item").each((index, item) => {
      cards.push($(item));
    });
    return cards;
  } catch (e) {
    throw e;
  }
};

const parseCard = (card, shop, url) => {
  let price = +card.find(".Price__value_caption").text();
  const weight = +card.find(".product-tile__weight").text().split(" ")[0];

  if (card.find(".product-tile__weight").text() !== "1 кг") {
    price = +((1000 * price) / weight).toFixed(2);
  }

  const link = url.split("/uk/")[0] + card.find("a").attr("href");

  return {
    price,
    link,
    shop,
    name: card.find(".product-tile__title").text(),
    weight,
  };
};

const getDataPage = async (url, shop) => {
  const html = await getPage(url);
  const cardsOnPage = getAllCards(html);

  let data = [];
  cardsOnPage.forEach((item) => {
    data.push(parseCard(item, shop, url));
  });

  return data;
};

module.exports = async () => {
  let allCards = [];
  // затримка?
  for (const key in link) {
    const cards = await getDataPage(link[key], key);
    allCards = allCards.concat(cards);
  }

  return allCards;
};
