import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
  categoryReducer,
  productsReducer,
  cartReducer,
  orderReducer,
  authReducer,
} from './reducers';

const rootReducer = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  cart: cartReducer,
  orders: orderReducer,
  auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
