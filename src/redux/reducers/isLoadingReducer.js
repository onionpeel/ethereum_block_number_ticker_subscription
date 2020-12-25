import {
  LOAD_BLOCKS,
  BLOCK_LOADED
} from '../types';

const initialState = null;

export const isLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BLOCKS:
      return true;
    case BLOCK_LOADED:
      return false;

    default:
      return state;
  }
};
