import React from 'react';
import './MainApp.scss';
import Cards from './Cards/Cards';
import Graphic from './Graphic/Graphic';

const MainApp = ({appTheme}) => {
  return (
    <div className="main-app-container">
      <Cards appTheme={appTheme} />
      <Graphic appTheme={appTheme} />
    </div>
  );
}

export default MainApp;
