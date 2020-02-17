import FeedModel from '../models/FeedModel';
import { Action, Dispatch } from 'redux';

export const ACTION_FEEDS_FETCH = 'FEEDS_FETCH';
export const ACTION_FEEDS_FETCH_SUCCESS = 'FEEDS_FETCH_SUCCESS';
export const ACTION_FEEDS_FETCH_ERROR = 'FEEDS_FETCH_ERROR';


export interface IActionFeedsFetch extends Action {
    type: 'FEEDS_FETCH';
}

export interface IActionFeedsFetchSuccess extends Action {
    type: 'FEEDS_FETCH_SUCCESS';
    feeds: FeedModel[];
}

export interface IActionFeedsFetchError extends Action {
    type: 'FEEDS_FETCH_ERROR';
    errorMessage: string;
}

export type FeedActions = IActionFeedsFetch | IActionFeedsFetchSuccess | IActionFeedsFetchSuccess;
