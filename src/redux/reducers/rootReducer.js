import { combineReducers } from 'redux';
import { isSubscribedReducer } from './isSubscribedReducer';
import { blockArrayReducer } from './blockArrayReducer';
import { isPausedReducer } from './isPausedReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  isSubscribed: isSubscribedReducer,
  blockArray: blockArrayReducer,
  isPaused: isPausedReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
});
