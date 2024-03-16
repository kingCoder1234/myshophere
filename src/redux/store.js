import { createStore, applyMiddleware, compose } from "redux"; // Import compose from redux
import {thunk} from "redux-thunk"; // Import thunk correctly

import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
