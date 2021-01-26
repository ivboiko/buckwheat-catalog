import React from 'react';
import './Header.scss';
import ThemeSwitcher from '../common/ThemeSwitcher/ThemeSwitcher';
import {theme} from '../../redux/reducers/app-reducer';
import classNames from 'classnames';

const Header = ({appTheme}) => {
  const logoClassName = classNames(
    "app-name",
    {
      "app-light-name": appTheme === theme.light,
      "app-dark-name": appTheme === theme.dark,
    },
  );

  return (
    <div className="header">
      <span className={logoClassName}>
        GRECHA•
      </span>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
