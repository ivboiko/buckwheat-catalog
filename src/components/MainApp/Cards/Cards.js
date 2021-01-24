import React, { useEffect } from "react";
import "./Cards.scss";
import novus from "../../../assets/imgs/NOVUS_logo.png";
import Card from "./Card/Card";
import DataPicker from "../../common/DataPicker/DataPicker";
import constant from "../../../assets/imgs/constant.png";
import increase from "../../../assets/imgs/increase.png";
import reduction from "../../../assets/imgs/reduction.png";
import PriceSort from "../../common/PriceSort/PriceSort";
import AppDropdown from "../../common/Dropdown/Dropdown";
import { useDataCard } from "./useDataCard";
import Spinner from "../../common/Spinner";

const Cards = () => {
  const cards = useDataCard();

  useEffect(() => {
    cards.request();
  }, []);

  const initialButtonsData = [
    {
      id: 1,
      value: "За 1 кілограм",
      isActive: true,
      onClickHandler: () => console.log("За 1 кілограм"),
    },
    {
      id: 2,
      value: "За упаковку",
      isActive: false,
      onClickHandler: () => console.log("За упаковку"),
    },
  ];

  if (!cards.loading) {
    return (
      <div className="container app-child">
        <Spinner />
      </div>
    );
  }

  if (cards.loading) {
    console.log("cards", cards.cards);
    console.log("dataCards", cards.dataCards);
  }

  return (
    <div className="container app-child">
      <div className="card-filters">
        <DataPicker initialData={initialButtonsData} />
        <div className="cards-sort-container">
          <PriceSort />
          <AppDropdown />
        </div>
      </div>
      <div className="cards-container">
        {cards.cards.map((item, index) => {
          return (
            <Card
              number={index}
              logoSrc={item.logoSrc}
              storeName="Novus"
              productName="Крупа гречана Novus ядриця швидкорозварювана"
              weight="400 г"
              price={item.priceForPack}
              increase={item.increase}
              procent={item.procent}
              bestPrice={item.bestPrice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
