import { useState } from "react";
import axios from "axios";

export function usePeriodGraphic() {
  const [price, setPrice] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (url) => {
    try {
      setLoading(false);
      const response = await axios.get(url);
      setPrice(response.data);
      setLoading(true);
    } catch (e) {
      setError(e.message);
    }
  };

  const getDataShop = (arr, shop) => {
    let shopData = 0;

    arr.forEach((item) => {
      if (item.shop === shop) {
        shopData = item;
      }
    });
    return shopData;
  };

  const increasePrise = (shop, price) => {
    if (!price.length) {
      return null;
    }

    const firstDay = price[0];
    const lastDay = price[price.length - 1];

    const priceStart = getDataShop(firstDay, shop);
    const priceEnd = getDataShop(lastDay, shop);

    const increase = Math.round(
      (100 * priceEnd.priceForPack) / priceStart.priceForPack - 100
    );

    return {
      priceStart,
      priceEnd,
      increase,
    };
  };

  const getZero = (number) => {
    if (number < 10) {
      return `0${number}`;
    } else {
      return `${number}`;
    }
  };

  const getDataGraphic = (shop) => {
    let newData = price.map((item, index) => {
      const helper = getDataShop(item, shop);
      return { ...helper, day: getZero(index + 1) };
    });

    if (newData[newData.length - 1]) {
      newData[newData.length - 1].day = "now";
    }

    return newData;
  };

  return {
    price,
    request,
    loading,
    error,
    increasePrise,
    getDataGraphic,
  };
}
