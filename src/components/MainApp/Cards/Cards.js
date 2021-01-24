import React, { useEffect } from "react";
import "./Cards.scss";
import Card from "./Card/Card";
import DataPicker from "../../common/DataPicker/DataPicker";
import PriceSort from "../../common/PriceSort/PriceSort";
import AppDropdown from "../../common/Dropdown/Dropdown";
import { useDataCard } from "./useDataCard";
import Spinner from "../../common/Spinner";
import PriceSort from '../../common/PriceSort/PriceSort';
import AppDropdown from '../../common/Dropdown/Dropdown';
import classNames from 'classnames';
import {theme} from '../../../redux/reducers/app-reducer';



const Cards = ({appTheme}) => {
  const cards = useDataCard();
  useEffect(() => {
    cards.request().catch((err) => console.log(err));
  }, []);

  const cardsContainerClassName = classNames(
      "container app-child",
      {
        "cards-light-container": appTheme === theme.light,
        "cards-dark-container": appTheme === theme.dark,
      },
  );

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

  const dropdownOptions = [
    {
      value: 'Тиждень',
      label: 'Тиждень',
    },
    {
      value: 'Місяць',
      label: 'Місяць',
    },
    {
      value: 'Рік',
      label: 'Рік',
    },
  ];

  return (
    <div className={cardsContainerClassName}>
      <div className="card-filters">
        <div className="cards-filters-picker">
          <DataPicker initialData={initialButtonsData} appTheme={appTheme} />
        </div>
        <div className="cards-sort-container">
          <PriceSort appTheme={appTheme} />
          <AppDropdown appTheme={appTheme} options={dropdownOptions} defaultOption={dropdownOptions[0]}/>
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
