import { productsTypes } from '../types';

const { FILTER_PRODUCTS, SELECT_PRODUCT } = productsTypes;

export const selectProduct = (id) => ({
  type: SELECT_PRODUCT,
  productId: id,
});

export const filterProducts = (id) => ({
  type: FILTER_PRODUCTS,
  categoryId: id,
});
