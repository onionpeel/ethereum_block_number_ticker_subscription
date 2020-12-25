import { all } from 'redux-saga/effects';
import {
  watchLoadBlocksSaga,
  watchResumeSaga
} from './subscribeSagas';

export function* rootSaga() {
  yield all([
    watchLoadBlocksSaga(),
    watchResumeSaga()
  ]);
};
