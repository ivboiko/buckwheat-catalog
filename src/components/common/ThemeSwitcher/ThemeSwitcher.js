import React from 'react';
import './ThemeSwitcher.scss';
import {useTheme} from '../CustomHooks/useTheme';

const ThemeSwitcher = () => {
  const setTheme = useTheme();

  const changeTheme = () => {
    setTheme();
  };

  return (
    <div className="toggleWrapper">
      <input type="checkbox" className="dn" id="dn" defaultChecked={true} onClick={changeTheme}/>
      <label htmlFor="dn" className="toggle">
        <span className="toggle__handler"/>
      </label>
    </div>
  );
};


export default ThemeSwitcher;