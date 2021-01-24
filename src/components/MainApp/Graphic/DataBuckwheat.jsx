import React from 'react';
import './DataBuckwheat.scss';
import arrowDown from '../../../assets/imgs/arrow_down.svg';
import {getTextClassName} from '../../../utils/getTextClassName';

const DataBuckwheat = ({storeName, itemName, price, priceEnd = "", increase = 0, appTheme}) => {
  return (
    <div className="DataBlock">
      <div className={getTextClassName("NameBrand", appTheme)}>{storeName}</div>
      <div className={getTextClassName("description", appTheme)}>{itemName}</div>
      <div className="GoodsNumbers">
        <div className={getTextClassName("DataPrice", appTheme)}>₴{price}</div>
        <div className="percent">
          {increase}%<img className="arrow" src={arrowDown} alt="arrow down"/>
        </div>
      </div>
    </div>
  );
};

export default DataBuckwheat;
