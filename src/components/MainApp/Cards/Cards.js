import React from 'react';
import './Cards.scss';
import novus from '../../../assets/imgs/NOVUS_logo.png';
import Card from './Card/Card';

const Cards = ({cards}) => {
  return (
    <div className="container app-child">
      <div className="card-filters">
        Фильтры
      </div>
      <div className="cards-container">
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          price={22.99}
          bestPrice/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          price={22.99}/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          price={22.99}/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          price={22.99}/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          price={22.99}/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          price={22.99}/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          price={22.99}/>
        <Card
          number={1}
          logoSrc={novus}
          storeName='Novus'
          productName='Крупа гречана Novus ядриця швидкорозварювана'
          weight='400 г'
          price={22.99}/>
      </div>
    </div>
  );
};

export default Cards;
