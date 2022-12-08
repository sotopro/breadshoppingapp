import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { categoryReducer, productsReducer, cartReducer } from './reducers';

const rootReducer = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
