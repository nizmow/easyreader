import { Reducer } from 'redux';
import { FeedsState, FeedActionTypes } from './types';

const initialState: FeedsState = {
    data: [],
    error: undefined,
    loading: false,
}

const reducer: Reducer<FeedsState> = (state: FeedsState = initialState, action) => {
    switch(action.type) {
        case FeedActionTypes.FETCH_REQUEST:
            return {...state, loading: true}
        case FeedActionTypes.FETCH_SUCCESS:
            return {...state, loading: false, data: action.payload}
        case FeedActionTypes.FETCH_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export { reducer as feedsReducer }
