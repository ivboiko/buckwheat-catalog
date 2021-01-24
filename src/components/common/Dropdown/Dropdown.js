import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import dropdown_blue_down from '../../../assets/imgs/dropdown_down.svg';
import dropdown_white_down from '../../../assets/imgs/dropdown_white_down.svg';
import dropdown_blue_up from '../../../assets/imgs/dropdown_up.svg';
import dropdown_white_up from '../../../assets/imgs/dropdown_white_up.svg';
import './Dropdown.scss';
import {theme} from '../../../redux/reducers/app-reducer';
import classNames from 'classnames';

const AppDropdown = ({appTheme, options, defaultOption}) => {
  const ArrowUp = () => {
    return <img src={appTheme === theme.light ? dropdown_blue_up : dropdown_white_up} alt="up arrow" className="dr-arrow" />
  };

  const ArrowDown = () => {
    return <img src={appTheme === theme.light ? dropdown_blue_down : dropdown_white_down} alt="up arrow" className="dr-arrow" />
  };

  const controlClassName = classNames(
    "dropdown",
    "dropdown-text",
    {
      "dropdown-light-text dropdown-light": appTheme === theme.light,
      "dropdown-dark-text dropdown-dark": appTheme === theme.dark,
    },
  );

  const menuClassName = classNames(
    "menu",
    "dropdown-text",
    {
      "dropdown-light-text menu-light": appTheme === theme.light,
      "dropdown-dark-text menu-dark": appTheme === theme.dark,
    },
  );

  return (
    <Dropdown
      controlClassName={controlClassName}
      menuClassName={menuClassName}
      arrowOpen={<ArrowUp />}
      arrowClosed={<ArrowDown />}
      arrowClassName="arrow-dropdown"
      options={options}
      value={defaultOption} />
  );
};

export default AppDropdown;
