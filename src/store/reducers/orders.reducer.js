import { ordersTypes } from '../types';

const { GET_ORDERS, DELETE_ORDER } = ordersTypes;

const initialState = {
  list: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        list: action.orders,
      };
    case DELETE_ORDER:
      return {
        ...state,
        list: state.list.filter((order) => order.id !== action.id),
      };
    default:
      return state;
  }
};

export default orderReducer;
