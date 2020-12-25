import {
  SUBSCRIBE,
  UNSUBSCRIBE
} from '../types';

const initialState = false;

export const isSubscribedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIBE:
      return true;
    case UNSUBSCRIBE:
      return false;
      
    default:
      return state;
  }
};
