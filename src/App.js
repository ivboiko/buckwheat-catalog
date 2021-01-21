import React from 'react';
import './index.scss';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import novus from './assets/imgs/NOVUS_logo.png'

const App = () => (
  <>
    <Header />
    <Card
      number={1}
      logoSrc={novus}
      storeName='Novus'
      productName='Крупа гречана Novus ядриця швидкорозварювана'
      weight='400 г'
      price={22.99}
      bestPrice />
  </>
);

export default App;
