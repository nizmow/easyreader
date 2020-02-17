import { action } from 'typesafe-actions';
import { FeedActionTypes, Feed } from './types';

export const fetchRequest = () => action(FeedActionTypes.FETCH_REQUEST);
export const fetchSuccess = (data: Feed[]) => action(FeedActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(FeedActionTypes.FETCH_ERROR, message);
