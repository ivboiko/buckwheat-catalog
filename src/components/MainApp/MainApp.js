import React from 'react';
import './MainApp.scss';
import Cards from './Cards/Cards';
import Graphic from './Graphic/Graphic';

const MainApp = () => {
  return (
    <div className="main-app-container">
      <Cards />
      <Graphic />
    </div>
  );
}

export default MainApp;
