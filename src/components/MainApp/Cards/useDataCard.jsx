import { useState, useEffect } from "react";
import axios from "axios";
import constant from "../../../assets/imgs/constant.png";
import increase from "../../../assets/imgs/increase.png";
import reduction from "../../../assets/imgs/reduction.png";
import novus from "../../../assets/imgs/NOVUS_logo.png";
import auchan from "../../../assets/imgs/АШАН_logo.png";
import megamarket from "../../../assets/imgs/МЕГАМАРКЕТ_logo.png";
import varus from "../../../assets/imgs/VARUS_logo.png";
import furshet from "../../../assets/imgs/ФУРШЕТ_logo.png";
import eko from "../../../assets/imgs/EKO_logo.png";
import citymarket from "../../../assets/imgs/CITY_MARKET_logo.png";

const logo = {
  novus,
  auchan,
  megamarket,
  varus,
  furshet,
  eko,
  citymarket,
};

export function useDataCard() {
  const [dataCardsFromDb, setDataCardsFromDb] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cards, setCards] = useState([]);
  const [period, setPeriod] = useState("week");

  useEffect(() => {
    const s = bestShop(dataCardsFromDb);
    setCards(s);
  }, [period]);

  const filterPeriod = (data, filterIndex, dataCards) => {
    dataCards[filterIndex].goods.forEach((item, index) => {
      const start = item.priceForKg;
      const end = data[index].priceForKg;

      const procent = ((end - start) / start) * 100;
      data[index].procent = procent;
      if (procent < 0) {
        data[index].increase = reduction;
      } else if (procent > 0) {
        data[index].increase = increase;
      } else if (procent === 0) {
        data[index].increase = constant;
      }

      data[index].logoSrc = logo[`${data[index].shop}`];
    });

    return data;
  };

  const bestShop = (dataCards) => {
    let data;

    if (dataCards.length === 0) {
      return null;
    }

    data = dataCards[0].goods.map((item) => {
      return { ...item };
    });

    if (period === "week") {
      data = filterPeriod(data, 1, dataCards);
    } else if (period === "month") {
      data = filterPeriod(data, 2, dataCards);
    } else if (period === "year") {
      data = filterPeriod(data, 3, dataCards);
    } else return null;

    // sort
    data.sort(function (a, b) {
      return a.priceForKg - b.priceForKg;
    });

    data[0].bestPrice = true;

    return data;
  };

  const request = async () => {
    try {
      setLoading(false);
      const response = await axios.get("/data/ymwd");
      setDataCardsFromDb(response.data);
      const s = bestShop(response.data);
      setCards(s);
      setLoading(true);
    } catch (e) {
      setError(e.message);
    }
  };

  return {
    request,
    loading,
    error,
    bestShop,
    period,
    setPeriod,
    cards,
  };
}
