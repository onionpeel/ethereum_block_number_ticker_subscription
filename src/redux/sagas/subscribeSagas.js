import { takeLatest, put } from 'redux-saga';
import {
  SUBSCRIBE,
  SUBSCRIBE_SAGA,
} from '../types';

export function* subscribeSaga() {
  
};

export function* watchSubscribeSaga() {
  yield takeLatest(SUBSCRIBE_SAGA, subscribeSaga);
};
