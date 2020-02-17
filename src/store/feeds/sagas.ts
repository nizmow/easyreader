import { all, call, fork, put, takeEvery, take, select } from 'redux-saga/effects';
import { FeedActionTypes } from './types';
import { fetchError, fetchSuccess } from './actions';

function* logFetch() {
    const action = yield select();
    console.log(action);
}

function* watchFetchRequest() {
    yield takeEvery(FeedActionTypes.FETCH_REQUEST, logFetch);
}

export function* feedsSaga() {
    yield all([fork(watchFetchRequest)]);
}
