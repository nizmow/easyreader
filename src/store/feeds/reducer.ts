import { Reducer } from 'redux';
import { FeedsState, FeedActionTypes } from './types';
import { Feed } from 'semantic-ui-react';

const initialState: FeedsState = {
    data: [],
    errors: undefined,
    loading: false,
}

const reducer: Reducer<FeedsState> = (state: FeedsState = initialState, action) => {
    switch(action.type) {
        case FeedActionTypes.FETCH_REQUEST:
            return {...state, loading: true}
        case FeedActionTypes.FETCH_SUCCESS:
            return {...state, loading: false, data: action.payload}
        case FeedActionTypes.FETCH_ERROR:
            return {...state, loading: false, errors: action.payload}
        default:
            return state;
    }
}

export { reducer as feedsReducer }
