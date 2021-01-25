import React from "react";
import "./DataBuckwheat.scss";
import arrowDown from "../../../assets/imgs/arrow_down.svg";
import arrowUp from "../../../assets/imgs/ic_Down.svg";
import { getTextClassName } from "../../../utils/getTextClassName";

const DataBuckwheat = ({ priceEnd = "", increase = 0, appTheme }) => {
  const percent = () => {
    if (increase < 0) {
      return (
        <div className="percent percent-down">
          {increase}%<img className="arrow" src={arrowDown} alt="arrow down" />
        </div>
      );
    } else if (increase > 0) {
      return (
        <div className="percent percent-up">
          {increase}%<img className="arrow" src={arrowUp} alt="arrow down" />
        </div>
      );
    } else {
      return (
        <div className="percent percent-zero">
          {increase}%
        </div>
      );
    }
  };

  return (
    <div className="DataBlock">
      <div className={getTextClassName("NameBrand", appTheme)}>
        {priceEnd.shop}
      </div>
      <div className={getTextClassName("description", appTheme)}>
        {priceEnd.name}
      </div>
      <div className="GoodsNumbers">
        <div className={getTextClassName("DataPrice", appTheme)}>
          ₴{priceEnd.priceForPack}
        </div>
        {percent()}
        {/*<div className="percent">*/}
        {/*  {increase}%<img className="arrow" src={arrowDown} alt="arrow down" />*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default DataBuckwheat;
