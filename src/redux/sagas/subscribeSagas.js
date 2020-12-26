import { web3ws } from '../../web3/web3';
import { eventChannel } from 'redux-saga';
import { takeLatest, put, take, call, cancelled, select } from 'redux-saga/effects';
import {
  SUBSCRIBE,
  UNSUBSCRIBE,
  SET_BLOCK_ARRAY,
  RESUME,
  RESUME_SAGA,
  LOAD_BLOCKS,
  LOAD_BLOCKS_SAGA,
  BLOCK_LOADED,
  ERROR,
  CLEAR_ERROR,
  CLEAR_ERROR_SAGA,
  CLEAR_BLOCK_ARRAY
} from '../types';

function eventSubscribe() {
  return eventChannel(emitter => {

    let subscription = web3ws.eth.subscribe('newBlockHeaders', error => {
      if (error) emitter(error);
    })
    .on('data', blockHeader => {
      emitter(blockHeader);
    })
    .on('error', error => {
      if (error) emitter(error);
    });

    const unsubscribe = () => {
      subscription.unsubscribe(error => {
        if (error) emitter(error);
      });
    };

    return unsubscribe;
  });
};


export function* subscribeSaga() {
  let isPaused = yield select(state => state.isPaused);
  let blockArray = yield select(state => state.blockArray);
  const chan = yield call(eventSubscribe);

  try {
    yield put({type: SUBSCRIBE});
    if (blockArray.length > 0 && isPaused) {
      yield put({type: CLEAR_BLOCK_ARRAY});
    };
    yield put({type: LOAD_BLOCKS});
    yield put({type: RESUME});
    yield put({type: CLEAR_ERROR});
    let isLoading = yield select(state => state.isLoading);

    while (true) {
      let blockHeader = yield take(chan);
      isPaused = yield select(state => state.isPaused);
      if(isPaused) {
        chan.close();
        yield put({type: UNSUBSCRIBE});
        return;
      };

      isLoading = yield select(state => state.isLoading);
      if (isLoading) {
        yield put({type: BLOCK_LOADED});
      };

      yield put({type: SET_BLOCK_ARRAY, payload: blockHeader})
      };

    yield put({type: UNSUBSCRIBE});
  } catch (error){
    if (error) {
      chan.close();
      yield put({type: UNSUBSCRIBE});
      yield put({type: ERROR, payload: error.toString()});
    }
  } finally {
    if (yield cancelled()) {
      chan.close();
    };
  };
};

export function* watchLoadBlocksSaga() {
  yield takeLatest(LOAD_BLOCKS_SAGA, subscribeSaga);
};

export function* watchResumeSaga() {
  yield takeLatest(RESUME_SAGA, subscribeSaga);
};

export function* watchClearErrorSaga() {
  yield takeLatest(CLEAR_ERROR_SAGA, subscribeSaga);
};
