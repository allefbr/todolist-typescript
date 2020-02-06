export interface ITodos {
  id: number;
  title: string;
  projectId: number;
  status: string;
  dateEnd: string;
  checked: boolean;
}

export enum TodosActionTypes {
  FETCH_REQUEST = '@@todos/FETCH_REQUEST',
  FETCH_SUCCESS = '@@todos/FETCH_SUCCESS',
  FETCH_ERROR = '@@todos/FETCH_ERROR',
  CREATE = '@@todos/CREATE',
  EDIT = '@@todos/EDIT',
}

export interface TodosState {
  readonly loading: boolean;
  readonly data: ITodos[];
  readonly errors?: string;
}
