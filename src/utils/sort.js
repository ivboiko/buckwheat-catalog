export const sortByPrice = (isAscending, sortBuy) => (item1, item2) => {
  const price1 = Number(item1[sortBuy].toFixed(2));
  const price2 = Number(item2[sortBuy].toFixed(2));

  // debugger

  if (price1 === price2) {
    return 0;
  }

  if (price1 < price2) {
    return isAscending ? -1 : 1;
  } else {
    return isAscending ? 1 : -1;
  }
};
