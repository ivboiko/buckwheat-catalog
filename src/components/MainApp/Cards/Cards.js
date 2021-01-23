import React from 'react';
import './Cards.scss';
import novus from '../../../assets/imgs/NOVUS_logo.png';
import Card from './Card/Card';
import DataPicker from '../../common/DataPicker/DataPicker';
import constant from "../../../assets/imgs/constant.png";
import increase from "../../../assets/imgs/increase.png";
import reduction from "../../../assets/imgs/reduction.png";

const Cards = ({cards}) => {
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

  return (
    <div className="container app-child">
      <div className="card-filters">
        <DataPicker initialData={initialButtonsData}/>
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
          bestPrice/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          price={22.99}
          increase={reduction}
          procent={-6}/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          price={22.99}
          increase={increase}
          procent={+18}/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          price={22.99}
          increase={constant}
          procent={0}/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          price={22.99}
          increase={constant}
          procent={0}/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          price={22.99}
          increase={constant}
          procent={0}/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          price={22.99}
          increase={constant}
          procent={0}/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          price={22.99}
          increase={constant}
          procent={0}/>
      </div>
    </div>
  );
};

export default Cards;
