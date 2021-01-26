import React from 'react';
import './ThemeSwitcher.scss';
import {useTheme} from '../CustomHooks/useTheme';
import {theme} from '../../../redux/reducers/app-reducer';

const ThemeSwitcher = ({appTheme}) => {
  const setTheme = useTheme(appTheme === theme.light);

  const changeTheme = () => {
    setTheme();
  };

  const switcherValue = appTheme === theme.light;

  return (
    <div className="toggleWrapper">
      <input type="checkbox" className="dn" id="dn" checked={switcherValue} onClick={changeTheme}/>
      <label htmlFor="dn" className="toggle">
        <span className="toggle__handler"/>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
