import React from 'react';
import './ThemeSwitcher.scss';

const ThemeSwitcher = () => (
  <div className="toggleWrapper">
    <input type="checkbox" className="dn" id="dn"/>
    <label htmlFor="dn" className="toggle">
    <span className="toggle__handler">
    </span>
    </label>
  </div>
);

export default ThemeSwitcher;