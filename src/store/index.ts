import { combineReducers, Dispatch, Reducer, Action, AnyAction } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { feedsSaga } from './feeds/sagas';
import { FeedsState } from './feeds/types';
import { feedsReducer } from './feeds/reducer';

export interface ApplicationState {
    feeds: FeedsState
}

export const createRootReducer = () =>
    combineReducers({
        feeds: feedsReducer,
    })

export function* rootSaga() {
    yield all([
        fork(feedsSaga)
    ]);
}