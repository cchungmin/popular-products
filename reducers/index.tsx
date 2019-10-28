import types from '../actions/types';

export const INITIAL_STATE = {
  products: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.data,
      };
    case types.VOTE_SUCCESS:
      const newProducts = state.products.map(el => {
        if (el.id === action.data) {
          return {
            ...el,
            votes: el.votes + 1,
          }
        }
        return el;
      });
      return {
        ...state,
        products: newProducts,
      };
    default:
      return state;
  }
};

export default reducer;
