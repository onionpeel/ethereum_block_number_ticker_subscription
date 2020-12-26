import { all } from 'redux-saga/effects';
import {
  watchLoadBlocksSaga,
  watchResumeSaga,
  watchClearErrorSaga
} from './subscribeSagas';

export function* rootSaga() {
  yield all([
    watchLoadBlocksSaga(),
    watchResumeSaga(),
    watchClearErrorSaga()
  ]);
};
