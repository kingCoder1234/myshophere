import { ActionTypes } from "../constants/action-type";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        const updatedCart = state.cart.map((item, index) => {
          if (index === existingProductIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case ActionTypes.HANDLE_QUANTITY:
      const { productId: handleProductId, change } = action.payload;
      const updatedCartHandle = state.cart.map((item) =>
        item.id === handleProductId
          ? { ...item, quantity: Math.max(item.quantity + change, 1) }
          : item
      );
      return {
        ...state,
        cart: updatedCartHandle,
      };

    case ActionTypes.REMOVE_CART_PRODUCT:
      const { productId: removeProductId } = action.payload;
      const updatedCartRemove = state.cart.filter(
        (item) => item.id !== removeProductId
      );
      return {
        ...state,
        cart: updatedCartRemove,
      };

    default:
      return state;
  }
};

export default cartReducer;
