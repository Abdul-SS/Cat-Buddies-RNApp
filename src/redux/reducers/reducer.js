import {ADD_CAT, EDIT_CAT, REMOVE_CAT, GET_ALL_CAT} from '../actions/types';

const initialState = {
  catBuddies: [],
};

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAT:
      return {...state, catBuddies: [...state.catBuddies, action.data]};

    case EDIT_CAT:
      return {
        ...state,
        catBuddies: state.catBuddies.map(data => {
          return data.id == action.data.id ? action.data : data;
        }),
      };
    case REMOVE_CAT:
      return {
        ...state,
        catBuddies: state.catBuddies.filter(data => data.id !== action.data.id),
      };
    case GET_ALL_CAT:
      return state.catBuddies;
    default:
      return state;
  }
};
