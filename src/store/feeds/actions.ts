import { action } from 'typesafe-actions';
import { FeedsActionTypes, Feed } from './types';

export const fetchRequest = () => action(FeedsActionTypes.FETCH_REQUEST);
export const fetchSuccess = (data: Feed[]) => action(FeedsActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(FeedsActionTypes.FETCH_ERROR, message);
export const selected = (id: number) => action(FeedsActionTypes.SELECTED, id);