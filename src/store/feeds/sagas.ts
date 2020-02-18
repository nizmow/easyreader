import { all, call, fork, put, takeEvery, take, select } from 'redux-saga/effects';
import { FeedsActionTypes } from './types';
import { fetchError, fetchSuccess } from './actions';
import NextcloudNewsApi from '../../api/nextcloudNews';

function* handleFetch() {
    try {
        const result = yield call(NextcloudNewsApi.getFeeds);
        yield put(fetchSuccess(result))
    } catch (error) {
        yield put(fetchError(error.message));
    }
}

function* watchFetchRequest() {
    yield takeEvery(FeedsActionTypes.FETCH_REQUEST, handleFetch);
}

export function* feedsSaga() {
    yield all([fork(watchFetchRequest)]);
}
