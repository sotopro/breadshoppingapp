import { CATEGORIES } from '../../constants/data';

const initialState = {
  categories: CATEGORIES,
  selected: null,
};

const categoryReducer = (state = initialState, action) => {
  return state;
};

export default categoryReducer;
