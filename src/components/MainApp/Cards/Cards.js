import React, {useEffect} from 'react';
import './Cards.scss';
import Card from './Card/Card';
import DataPicker from '../../common/DataPicker/DataPicker';
import PriceSort from '../../common/PriceSort/PriceSort';
import AppDropdown from '../../common/Dropdown/Dropdown';
import {periodConst, useDataCard} from './useDataCard';
import Spinner from '../../common/Spinner';
import classNames from 'classnames';
import {priceValue, theme, togglePriceFor} from '../../../redux/reducers/app-reducer';
import {sortByPrice} from '../../../utils/sort';
import {connect} from 'react-redux';
import {getFixedNumber} from '../../../utils/getFixedNumber';

const Cards = ({priceAscending, priceFor, appTheme, togglePriceFor}) => {
  const cards = useDataCard();

  useEffect(() => {
    cards.request().catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cardsContainerClassName = classNames(
    'container app-child', {
    'cards-light-container': appTheme === theme.light,
    'cards-dark-container': appTheme === theme.dark,
  });

  const initialButtonsData = [
    {
      id: 1,
      value: 'За 1 кілограм',
      isActive: true,
      onClickHandler: () => togglePriceFor(priceValue.kg),
    },
    {
      id: 2,
      value: 'За упаковку',
      isActive: false,
      onClickHandler: () => togglePriceFor(priceValue.pack),
    },
  ];

  if (!cards.loading) {
    return (
      <div className="container app-child">
        <Spinner/>
      </div>
    );
  }

  const dropdownOptions = [
    {
      value: periodConst.week,
      label: 'Тиждень',
    },
    {
      value: periodConst.month,
      label: 'Місяць',
    },
    {
      value: periodConst.year,
      label: 'Рік',
    },
  ];

  return (
    <div className={cardsContainerClassName}>
      <div className="card-filters">
        <div className="cards-filters-picker">
          <DataPicker initialData={initialButtonsData} appTheme={appTheme}/>
        </div>
        <div className="cards-sort-container">
          <PriceSort
            priceAscending={priceAscending}
            appTheme={appTheme}/>
          <AppDropdown
            setPeriod={cards.setPeriod}
            appTheme={appTheme}
            options={dropdownOptions}
            defaultOption={cards.period}
          />
        </div>
      </div>
      <div className="cards-container">
        {cards.cards
          .sort(sortByPrice(priceAscending, priceFor === priceValue.pack ? 'priceForPack' : 'priceForKg'))
          .map((item, index) => {
          return (
            <Card
              key={item._id}
              number={index + 1}
              logoSrc={item.logoSrc}
              storeName={item.shop}
              productName={item.name}
              weight={priceFor === priceValue.pack ? item.weight : '1 кг'}
              price={priceFor === priceValue.pack ? item.priceForPack : getFixedNumber(item.priceForKg, 2)}
              increase={item.increase}
              procent={item.procent}
              bestPrice={item.bestPrice}
              appTheme={appTheme}
              productLink={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  priceAscending: state.priceAscending,
  priceFor: state.priceFor,
});

export default connect(mapStateToProps, {
  togglePriceFor,
})(Cards);
