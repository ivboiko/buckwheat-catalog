import React from 'react';
import './Cards.scss';
import novus from '../../../assets/imgs/NOVUS_logo.png';
import Card from './Card/Card';
import DataPicker from '../../common/DataPicker/DataPicker';
import constant from "../../../assets/imgs/constant.png";
import increase from "../../../assets/imgs/increase.png";
import reduction from "../../../assets/imgs/reduction.png";
import PriceSort from '../../common/PriceSort/PriceSort';
import AppDropdown from '../../common/Dropdown/Dropdown';
import classNames from 'classnames';
import {theme} from '../../../redux/reducers/app-reducer';

const Cards = ({appTheme}) => {
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
      value: 'За 1 кілограм',
      isActive: true,
      onClickHandler: () => console.log('За 1 кілограм'),
    },
    {
      id: 2,
      value: 'За упаковку',
      isActive: false,
      onClickHandler: () => console.log('За упаковку'),
    },
  ];

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
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          price={22.99}
          increase={constant}
          procent={0}
          appTheme={appTheme}
          bestPrice/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          increase={reduction}
          procent={-6}
          appTheme={appTheme}
          price={22.99}/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          increase={increase}
          procent={+18}
          appTheme={appTheme}
          price={22.99}/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          increase={constant}
          procent={0}
          appTheme={appTheme}
          price={22.99}/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          increase={constant}
          procent={0}
          appTheme={appTheme}
          price={22.99}/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          increase={constant}
          procent={0}
          appTheme={appTheme}
          price={22.99}/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          increase={constant}
          procent={0}
          appTheme={appTheme}
          price={22.99}/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          increase={constant}
          procent={0}
          appTheme={appTheme}
          price={22.99}/>
      </div>
    </div>
  );
};

export default Cards;
