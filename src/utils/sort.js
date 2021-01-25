import {getFixedNumber} from './getFixedNumber';

export const sortByPrice = (isAscending, sortBuy) => (item1, item2) => {
  const price1 = getFixedNumber(item1[sortBuy], 2);
  const price2 = getFixedNumber(item2[sortBuy], 2);

  if (price1 === price2) {
    return 0;
  }

  if (price1 < price2) {
    return isAscending ? -1 : 1;
  } else {
    return isAscending ? 1 : -1;
  }
};
