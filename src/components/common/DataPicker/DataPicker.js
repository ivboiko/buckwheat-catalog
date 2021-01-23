import React, {useState} from 'react';
import './DataPicker.scss';

const DataPicker = ({initialData}) => {
  const [buttons, setButtons] = useState(initialData);

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
    <ul className="picker-container">
      {
        buttons.map((item) => (
          <li
            key={item.id.toString()}
            onClick={() => onButtonClick(item)}
            className={`picker-item ${item.isActive && 'picker-item-chosen'}`}
          >
            {item.value}
          </li>
        ))
      }
    </ul>
  );
};

export default DataPicker;