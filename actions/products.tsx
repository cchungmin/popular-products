import types from './types';

export const setProducts = data => async (dispatch) => {
  dispatch({ type: types.FETCH_PRODUCTS });
  if (data.length > 0) {
    dispatch({ data, type: types.FETCH_PRODUCTS_SUCCESS });
  } else {
    dispatch({ type: types.FETCH_PRODUCTS_FAILED });
  }
};

export const vote = id => async (dispatch) => {
  dispatch({ type: types.VOTE });
  if (id) {
    dispatch({ data: id, type: types.VOTE_SUCCESS });
  } else {
    dispatch({ type: types.VOTE_FAILED });
  }
};

export default {
  setProducts,
  vote,
};
