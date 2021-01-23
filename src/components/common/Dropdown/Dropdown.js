import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import dropdown_down from '../../../assets/imgs/dropdown_down.svg';
import dropdown_up from '../../../assets/imgs/dropdown_up.svg';
import './Dropdown.scss';

const AppDropdown = () => {
  const options = [
    {
      value: 'Тиждень',
      label: 'Тиждень',
    },
    {
      value: 'Місяць',
      label: 'Місяць',
    },
    {
      value: 'Рік',
      label: 'Рік',
    },
  ];

  const defaultOption = options[0];

  const ArrowUp = () => {
    return <img src={dropdown_up} alt="up arrow" className="dr-arrow" />
  };

  const ArrowDown = () => {
    return <img src={dropdown_down} alt="up arrow" className="dr-arrow" />
  };

  return (
    <Dropdown
      controlClassName="dropdown dropdown-text"
      menuClassName="menu dropdown-text"
      arrowOpen={<ArrowUp />}
      arrowClosed={<ArrowDown />}
      arrowClassName="arrow-dropdown"
      options={options}
      value={defaultOption} />
  );
};

export default AppDropdown;
