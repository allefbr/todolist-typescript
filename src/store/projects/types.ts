export interface IProjects {
  id: number;
  title: string;
  description: string;
  author: string;
}

export enum ProjectsActionTypes {
  FETCH_REQUEST = '@@projects/FETCH_REQUEST',
  FETCH_SUCCESS = '@@projects/FETCH_SUCCESS',
  FETCH_ERROR = '@@projects/FETCH_ERROR',
  SELECTED = '@@projects/SELECTED',
}

export interface ProjectsState {
  readonly loading: boolean;
  readonly data: IProjects[];
  readonly selected?: number;
  readonly errors?: string;
}
