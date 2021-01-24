import React, {useState} from 'react';
import './DataPicker.scss';
import classNames from 'classnames';
import {theme} from '../../../redux/reducers/app-reducer';

const DataPicker = ({initialData, appTheme}) => {
  const [buttons, setButtons] = useState(initialData);

  const pickerContainerClassname = classNames(
    "picker-container",
    {
      "picker-light-container": appTheme === theme.light,
      "picker-dark-container": appTheme === theme.dark,
    },
  );

  const getPickerItemClassname = (isActive) => classNames(
    "picker-item",
    {
      "picker-item-chosen": isActive,
      "picker-light-item": appTheme === theme.light,
      "picker-dark-item": appTheme === theme.dark,
    },
  );

  const onButtonClick = (item) => {
    if (item.isActive) return;

    const newButtons = buttons.map((btn) => {
      if (btn.isActive && btn.id !== item.id) {
        return {...btn, isActive: false};
      }

      if (btn.id === item.id && !btn.isActive) {
        return {...btn, isActive: true};
      }

      return btn;
    });

    item.onClickHandler();
    setButtons(newButtons);
  };

  return (
    <ul className={pickerContainerClassname}>
      {
        buttons.map((item) => (
          <li
            key={item.id.toString()}
            onClick={() => onButtonClick(item)}
            className={getPickerItemClassname(item.isActive)}
          >
            {item.value}
          </li>
        ))
      }
    </ul>
  );
};

export default DataPicker;