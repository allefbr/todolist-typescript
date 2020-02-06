import { action } from 'typesafe-actions';
import { TodosActionTypes, ITodos } from './types';

export const fetchRequest = () => action(TodosActionTypes.FETCH_REQUEST);
export const fetchSuccess = (data: ITodos[]) => action(TodosActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(TodosActionTypes.FETCH_ERROR, message);
export const edit = (todo: ITodos) => action(TodosActionTypes.EDIT, todo);
export const create = (todo: ITodos) => action(TodosActionTypes.EDIT, todo);
