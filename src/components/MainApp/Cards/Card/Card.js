import React from 'react';
import './Card.scss';
import BestPrice from '../../../common/BestPrice/BestPrice';

const Card = ({number, logoSrc, storeName, productName, weight, price, bestPrice}) => {
  return (
    <div className={`card-container ${bestPrice && 'best-price-card-container'}`}>
      <div className="number">
        {number}.
      </div>
      <div className="logo">
        <img src={logoSrc} alt="store logo"/>
      </div>
      <div className="text">
        <div className="store-name">
          {storeName}
        </div>
        <div className="product-name">
          {productName}
        </div>
        <div className="weight">
          {weight}
        </div>
      </div>
      <div className="price-container">
        <div className="price">
          ₴{price}
        </div>
        {bestPrice && <BestPrice />}
      </div>
    </div>
  );
};

export default Card;