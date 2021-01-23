import React from 'react';
import './PriceSort.scss';
import {connect} from 'react-redux';
import {togglePriceIsAscending} from '../../../redux/reducers/app-reducer';
import arrowUp from '../../../assets/imgs/arrow_up.svg';
import arrowDown from '../../../assets/imgs/arrow_down.svg';

const PriceSort = ({priceAscending, togglePriceIsAscending}) => {
  const onPriceSortButtonClick = () => {
    togglePriceIsAscending(!priceAscending);
  };

  return (
    <div className="price-sort-container" onClick={onPriceSortButtonClick}>
      <span className="price">Ціна</span>
      <img src={priceAscending ? arrowDown : arrowUp} alt="arrow" className="arrow"/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  priceAscending: state.priceAscending,
});

export default connect(mapStateToProps, {
  togglePriceIsAscending,
})(PriceSort);
