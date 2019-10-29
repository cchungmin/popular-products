import types from './types';

export const setProducts = (data: Array<Object>) => {
  if (data.length > 0) {
    return { data, type: types.FETCH_PRODUCTS_SUCCESS };
  } else {
    return { type: types.FETCH_PRODUCTS_FAILED };
  }
};

export const vote = (id: number) => {
  if (id) {
    return { data: id, type: types.VOTE_SUCCESS };
  } else {
    return { type: types.VOTE_FAILED };
  }
};

export default {
  setProducts,
  vote,
};
