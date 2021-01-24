import React from 'react';
import './DataBuckwheat.scss';
import arrowDown from '../../../assets/imgs/arrow_down.svg';
import {getTextClassName} from '../../../utils/getTextClassName';

const DataBuckwheat = ({priceEnd = "", increase = 0, appTheme}) => {
    console.log("priceEnd", priceEnd)
  return (
    <div className="DataBlock">
      <div className={getTextClassName("NameBrand", appTheme)}>{}</div>
      <div className={getTextClassName("description", appTheme)}>{}</div>
      <div className="GoodsNumbers">
        <div className={getTextClassName("DataPrice", appTheme)}>₴{}</div>
        <div className="percent">
          {increase}%<img className="arrow" src={arrowDown} alt="arrow down"/>
        </div>
      </div>
    </div>
  );
};

export default DataBuckwheat;
