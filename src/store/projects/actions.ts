import { action } from 'typesafe-actions';
import { ProjectsActionTypes, IProjects } from './types';

export const fetchRequest = () => action(ProjectsActionTypes.FETCH_REQUEST);
export const fetchSuccess = (data: IProjects[]) => action(ProjectsActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(ProjectsActionTypes.FETCH_ERROR, message);
export const selected = (projectId: number) => action(ProjectsActionTypes.SELECTED, projectId);
