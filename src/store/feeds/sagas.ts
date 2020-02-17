import { all, call, fork, put, takeEvery, take, select } from 'redux-saga/effects';
import { FeedActionTypes } from './types';
import { fetchError, fetchSuccess } from './actions';
import getFeeds from '../../api/feeds';

function* handleFetch() {
    try {
        const result = yield call(getFeeds);
        yield put(fetchSuccess(result))
    } catch (error) {
        yield put(fetchError(error.message));
    }
}

function* watchFetchRequest() {
    yield takeEvery(FeedActionTypes.FETCH_REQUEST, handleFetch);
}

export function* feedsSaga() {
    yield all([fork(watchFetchRequest)]);
}
