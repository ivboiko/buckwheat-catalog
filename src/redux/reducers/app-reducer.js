const TOGGLE_PRICE_IS_ASCENDING = 'TOGGLE_PRICE_IS_ASCENDING';
const TOGGLE_THEME = 'TOGGLE_THEME';
const TOGGLE_PRICE_FOR = 'TOGGLE_PRICE_FOR';

export const theme = {
  dark: 'dark',
  light: 'light',
};

export const priceValue = {
  kg: 'kg',
  pack: 'pack',
};

const initialState = {
  priceAscending: true,
  appTheme: theme.light,
  price: [],
  priceMainPeriod: "week",
  shop: null,
  priceFor: priceValue.kg,
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
    case TOGGLE_PRICE_FOR:
      console.log(action.priceFor)
      return {
        ...state,
        priceFor: action.priceFor,
      };
    default:
      return state;
  }
};

export const togglePriceIsAscending = (isAscending) => ({
    type: TOGGLE_PRICE_IS_ASCENDING,
    isAscending,
});

export const togglePriceFor = (priceFor) => ({
  type: TOGGLE_PRICE_FOR,
  priceFor,
});

export const toggleTheme = (newTheme) => ({
  type: TOGGLE_THEME,
  newTheme,
});
