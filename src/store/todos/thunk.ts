import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import callApi from 'utils/api';
import { FormData } from 'containers/Form';
import { fetchRequest, fetchSuccess, fetchError, edit, create } from './actions';
import { ApplicationState } from '../index';
import { ITodos } from './types';

const fetchTodosByProject = (
  projectId: number | null | undefined,
): ThunkAction<void, ApplicationState, null, Action<string>> => async dispatch => {
  dispatch(fetchRequest());

  let response;

  const data = {
    projectId,
  };

  try {
    response = await callApi('get', 'todos', data);
  } catch (error) {
    return dispatch(fetchError(error.message));
  }

  dispatch(fetchSuccess(response));
};

export const createTodo = (
  todo: FormData,
): ThunkAction<void, ApplicationState, null, Action<string>> => async dispatch => {
  let response;

  const data = {
    id: Date.now(),
    title: todo.title,
    projectId: todo.project,
    status: todo.status,
    dateEnd: todo.date,
    checked: false,
  };

  try {
    response = await callApi('post', 'todos', data);
  } catch (error) {
    console.log('error', error);
  }

  return dispatch(create(response));
};

export const checkedTodoRequest = (
  todo: ITodos,
): ThunkAction<void, ApplicationState, null, Action<string>> => async dispatch => {
  let response;

  const { id } = todo;

  try {
    response = await callApi('put', `todos/${id}`, todo);
  } catch (error) {
    console.log('error', error);
  }

  return dispatch(edit(response));
};

export default fetchTodosByProject;
