import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productReducers";
import cartReducer from "./cartReducers";
import userReducer from "./userReducers";
const reducers = combineReducers({
  allProducts: productsReducer, //for all products
  product: selectedProductsReducer, //for all products
  cart: cartReducer, //for all carts
  user: userReducer //for user
});
export default reducers;
