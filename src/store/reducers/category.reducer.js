/* eslint-disable no-case-declarations */
import { CATEGORIES } from '../../constants/data';
import { categoryTypes } from '../types';

const { SELECT_CATEGORY } = categoryTypes;
const initialState = {
  categories: CATEGORIES,
  selected: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      const indexCategory = state.categories.findIndex(
        (category) => category.id === action.categoryId
      );
      if (indexCategory === -1) return state;
      return {
        ...state,
        selected: state.categories[indexCategory],
      };
    default:
      return state;
  }
};

export default categoryReducer;
