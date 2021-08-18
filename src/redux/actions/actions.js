import {ADD_CAT, EDIT_CAT, REMOVE_CAT, GET_ALL_CAT} from './types';

export const addCats = data => ({
  type: ADD_CAT,
  data,
});

export const editCats = data => ({
  type: EDIT_CAT,
  data,
});

export const removeCats = data => ({
  type: REMOVE_CAT,
  data,
});

export const getAllCats = data => ({
  type: GET_ALL_CAT,
  data,
});
