import { SET_BLOCK_ARRAY } from '../types';

const initialState = [];

export const blockArrayReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BLOCK_ARRAY:
      let array = [...state];
      if (array.length === 10) array.splice(array.length - 1, 1);
      array.unshift(action.payload);
      return array;

    default:
      return state;
  }
};
