import { ItemsActionTypes, Item } from "./types";
import { action } from "typesafe-actions";

export const fetchRequest = () => action(ItemsActionTypes.FETCH_REQUEST);
export const fetchSuccess = (data: Item[]) => action(ItemsActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(ItemsActionTypes.FETCH_ERROR, message);
//export const selected = (id: number) => action(ItemsActionTypes.SELECTED, id);
