import React from "react";
import "./DataBuckwheat.scss";
import arrowDown from "../../../assets/imgs/Arrow_Down.png";

const DataBuckwheat = ({ priceEnd = "", increase = 0 }) => {
  return (
    <div className="DataBlock">
      <div className="NameBrand">{priceEnd.shop}</div>

      <div className="description">{priceEnd.name}</div>

      <div className="GoodsNumbers">
        <div className="DataPrice">₴{priceEnd.priceForPack}</div>

        <div className="persent">
          {increase}%
          <img className="arrow" src={arrowDown} alt={"sdfklj"} />
        </div>
      </div>
    </div>
  );
};

export default DataBuckwheat;
