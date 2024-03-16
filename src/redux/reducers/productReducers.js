import { ActionTypes } from "../constants/action-type";

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.REMOVE_PRODUCT:
      const updatedProducts = state.products.filter(
        (product) => product.id !== payload
      );
      return {
        ...state,
        products: updatedProducts,
      };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {}; // Clear selected product
    default:
      return state;
  }
};
