/* eslint-disable max-len */
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import callApi from 'utils/api';
import { fetchRequest, fetchSuccess, fetchError, selected } from './actions';

import { ApplicationState } from '../index';

// eslint-disable-next-line arrow-parens
const fetchProjects = (): ThunkAction<void, ApplicationState, null, Action<string>> => async dispatch => {
  dispatch(fetchRequest());

  let response;

  try {
    response = await callApi('get', 'projects');
  } catch (error) {
    return dispatch(fetchError(error.message));
  }

  return dispatch(fetchSuccess(response));
};

export const selectedProject = (
  projectId: number,
): ThunkAction<void, ApplicationState, null, Action<string>> => dispatch => {
  return dispatch(selected(projectId));
};

export default fetchProjects;
