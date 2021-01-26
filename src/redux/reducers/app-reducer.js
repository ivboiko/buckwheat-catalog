const TOGGLE_PRICE_IS_ASCENDING = "TOGGLE_PRICE_IS_ASCENDING";
const TOGGLE_THEME = "TOGGLE_THEME";
const TOGGLE_PRICE_FOR = "TOGGLE_PRICE_FOR";
const SET_SHOP = "SET_SHOP";

export const theme = {
  dark: "dark",
  light: "light",
};

export const priceValue = {
  kg: "kg",
  pack: "pack",
};

const initialState = {
  priceAscending: true,
  appTheme: theme.light,
  price: [],
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
      return {
        ...state,
        priceFor: action.priceFor,
      };
    case SET_SHOP:
      return {
        ...state,
        shop: action.payload,
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

export const setShop = (newShop) => ({
  type: SET_SHOP,
  payload: newShop,
});
