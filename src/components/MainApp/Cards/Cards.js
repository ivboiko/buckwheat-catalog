import React, {useEffect} from 'react';
import './Cards.scss';
import Card from './Card/Card';
import DataPicker from '../../common/DataPicker/DataPicker';
import PriceSort from '../../common/PriceSort/PriceSort';
import AppDropdown from '../../common/Dropdown/Dropdown';
import {useDataCard} from './useDataCard';
import Spinner from '../../common/Spinner';
import classNames from 'classnames';
import {priceValue, theme, togglePriceFor} from '../../../redux/reducers/app-reducer';
import {sortByPrice} from '../../../utils/sort';
import {connect} from 'react-redux';

const Cards = ({priceAscending, priceFor, appTheme, togglePriceFor}) => {
  const cards = useDataCard();
  useEffect(() => {
    cards.request().catch((err) => console.log(err));
  }, []);

  const cardsContainerClassName = classNames('container app-child', {
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
      value: 'Тиждень',
      label: 'Тиждень',
    },
    {
      value: 'Місяць',
      label: 'Місяць',
    },
    {
      value: 'Рік',
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
            appTheme={appTheme}
            options={dropdownOptions}
            defaultOption={dropdownOptions[0]}
          />
        </div>
      </div>
      <div className="cards-container">
        {cards.cards
          .sort(sortByPrice(priceAscending, priceFor === priceValue.pack ? 'priceForPack' : 'priceForKg'))
          .map((item, index) => {
          return (
            <Card
              key={index.toString()}
              number={index + 1}
              logoSrc={item.logoSrc}
              storeName={item.shop}
              productName={item.name}
              weight={`${item.weight} г`}
              price={priceFor === priceValue.pack ? item.priceForPack : Number(item.priceForKg).toFixed(2)}
              increase={item.increase}
              procent={item.procent}
              bestPrice={item.bestPrice}
              appTheme={appTheme}
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
