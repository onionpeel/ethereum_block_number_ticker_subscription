import {
  ERROR,
  CLEAR_ERROR
} from '../types';

const initialState = null;

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return action.payload;
    case CLEAR_ERROR:
      return null;

    default:
      return state;
  }
};
