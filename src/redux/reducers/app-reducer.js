const TOGGLE_PRICE_IS_ASCENDING = 'TOGGLE_PRICE_IS_ASCENDING';

const initialState = {
  priceAscending: true,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PRICE_IS_ASCENDING:
      return {
        ...state,
        priceAscending: action.isAscending,
      };
    default:
      return state;
  }
};

export const togglePriceIsAscending = (isAscending) => {
  return {
    type: TOGGLE_PRICE_IS_ASCENDING,
    isAscending,
  };
};
