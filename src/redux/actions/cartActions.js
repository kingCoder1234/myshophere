import { ActionTypes } from "../constants/action-type";

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};
export const removeCartProduct = (productId) => {
  return {
    type: ActionTypes.REMOVE_CART_PRODUCT,
    payload: {
      productId,
    },
  };
};

export const handleQuantity = (productId, change) => {
  return {
    type: ActionTypes.HANDLE_QUANTITY,
    payload: {
      productId,
      change,
    },
  };
};
