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
  BLOCK_LOADED
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
  let isPaused = select(state => state.isPaused);
  let isLoading = select(state => state.isLoading);
  const chan = yield call(eventSubscribe);

  try {
    yield put({type: SUBSCRIBE});
    yield put({type: LOAD_BLOCKS});
    yield put({type: RESUME});

    while (true && isPaused) {
      let blockHeader = yield take(chan);
      if (blockHeader && isLoading) {
        yield put({type: BLOCK_LOADED});
      };
      yield put({type: SET_BLOCK_ARRAY, payload: blockHeader})
    };
    yield put({type: UNSUBSCRIBE});
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
