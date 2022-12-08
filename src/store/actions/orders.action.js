import { URL_BASE } from '../../constants/firebase';
import { ordersTypes } from '../types';

const { GET_ORDERS, DELETE_ORDER } = ordersTypes;

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/orders.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      const orders = Object.keys(data).map((key) => ({
        ...data[key],
        id: key,
      }));

      dispatch({
        type: GET_ORDERS,
        orders,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteOrder = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/orders/${id}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log(data);
      dispatch({
        type: DELETE_ORDER,
        id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
