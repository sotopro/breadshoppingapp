import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { categoryReducer, productsReducer, cartReducer, orderReducer } from './reducers';

const rootReducer = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  cart: cartReducer,
  orders: orderReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
