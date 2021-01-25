import React from 'react';
import './Card.scss';
import BestPrice from '../../../common/BestPrice/BestPrice';
import classNames from 'classnames';
import {theme} from '../../../../redux/reducers/app-reducer';
import {getTextClassName} from '../../../../utils/getTextClassName';

const Card = ({number, logoSrc, storeName, productName, weight, price, bestPrice, increase, procent, appTheme, productLink}) => {
  const cardContainerClassName = classNames(
    "card-container",
    {
      "best-price-card-container": bestPrice,
      "card-light-container": appTheme === theme.light,
      "card-dark-container": appTheme === theme.dark,
    }
  );

  const linkClassName = classNames({
    "link-light": appTheme === theme.light,
    "link-dark": appTheme === theme.dark,
  });

  return (
    <div className={cardContainerClassName}>
      <div className={getTextClassName("number", appTheme)}>
        {number}.
      </div>
      <div className="logo">
        <img src={logoSrc} alt="store logo"/>
      </div>
      <div className={getTextClassName("text", appTheme)}>
        <div className={getTextClassName("store-name", appTheme)}>
          {storeName}
        </div>
        <div className={getTextClassName("product-name", appTheme)}>
          <a className={linkClassName} href={productLink}>{productName}</a>
        </div>
        <div className="weight">
          {weight}
        </div>
      </div>
      <div className="price-container">
        <div className={getTextClassName("price", appTheme)}>
          ₴{price}
        </div>
        {bestPrice && <BestPrice />}
      </div>
        <div className="price-increase" >
            <img src={increase} alt="bad connection"/>
            <div className="cheng"> {procent}%</div>
        </div>
    </div>
  );
};

export default Card;