const TOGGLE_PRICE_IS_ASCENDING = 'TOGGLE_PRICE_IS_ASCENDING';
const TOGGLE_THEME = 'TOGGLE_THEME';

export const theme = {
  dark: 'dark',
  light: 'light',
};


const initialState = {
  priceAscending: true,
  appTheme: theme.light,
  price: [],
  priceMainPeriod: "week",
  shop: "megamarket",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PRICE_IS_ASCENDING:
      return {
        ...state,
        priceAscending: action.isAscending,
      };
    case TOGGLE_THEME:
      return {
        ...state,
        appTheme: action.newTheme,
      };
    default:
      return state;
  }
};

export const togglePriceIsAscending = (isAscending) => ({
    type: TOGGLE_PRICE_IS_ASCENDING,
    isAscending,
});

export const toggleTheme = (newTheme) => ({
  type: TOGGLE_THEME,
  newTheme,
});
