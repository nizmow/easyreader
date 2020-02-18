import { Reducer } from 'redux';
import { FeedsState, FeedsActionTypes } from './types';

const initialState: FeedsState = {
    data: [],
    error: undefined,
    loading: false,
}

const reducer: Reducer<FeedsState> = (state: FeedsState = initialState, action) => {
    switch(action.type) {
        case FeedsActionTypes.FETCH_REQUEST:
            return {...state, loading: true}
        case FeedsActionTypes.FETCH_SUCCESS:
            return {...state, loading: false, data: action.payload}
        case FeedsActionTypes.FETCH_ERROR:
            return {...state, loading: false, error: action.payload}
        case FeedsActionTypes.SELECTED:
            return {...state, selected: action.payload};
        default:
            return state;
    }
}

export { reducer as feedsReducer }
