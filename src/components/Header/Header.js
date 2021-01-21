import React from 'react';
import './Header.scss';
import ThemeSwitcher from '../common/ThemeSwitcher/ThemeSwitcher';

const Header = () => {
  return (
    <div className='header'>
      <span className='app-name'>
        GRECHA•
      </span>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
