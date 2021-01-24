import React from 'react';
import './PriceSort.scss';
import {connect} from 'react-redux';
import {togglePriceIsAscending} from '../../../redux/reducers/app-reducer';
import blueArrowUp from '../../../assets/imgs/arrow_up.svg';
import blueArrowDown from '../../../assets/imgs/arrow_down.svg';
import whiteArrowDown from '../../../assets/imgs/arrow_white_down.svg';
import whiteArrowUp from '../../../assets/imgs/arrow_white_up.svg';
import classNames from 'classnames';
import {theme} from '../../../redux/reducers/app-reducer';

const PriceSort = ({priceAscending, togglePriceIsAscending, appTheme}) => {
  const onPriceSortButtonClick = () => {
    togglePriceIsAscending(!priceAscending);
  };

  const priceSortContainerClassName = classNames(
    "price-sort-container",
    {
      "price-sort-light-container": appTheme === theme.light,
      "price-sort-dark-container": appTheme === theme.dark,
    },
  );

  const priceClassName = classNames(
    "price",
    {
      "price-light": appTheme === theme.light,
      "price-dark": appTheme === theme.dark,
    },
  );

  const getArrow = (priceAscending, appTheme) => {
    if (priceAscending) {
      return appTheme === theme.light ? blueArrowDown : whiteArrowDown;
    } else {
      return appTheme === theme.light ? blueArrowUp : whiteArrowUp;
    }
  };

  return (
    <div className={priceSortContainerClassName} onClick={onPriceSortButtonClick}>
      <span className={priceClassName}>Ціна</span>
      <img src={getArrow(priceAscending, appTheme)} alt="arrow" className="arrow"/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  priceAscending: state.priceAscending,
});

export default connect(mapStateToProps, {
  togglePriceIsAscending,
})(PriceSort);
