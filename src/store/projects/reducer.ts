import { Reducer } from 'redux';
import { ProjectsState, ProjectsActionTypes } from './types';

export const initialState: ProjectsState = {
  data: [],
  selected: 0,
  errors: undefined,
  loading: false,
};

const reducer: Reducer<ProjectsState> = (state = initialState, action) => {
  switch (action.type) {
    case ProjectsActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case ProjectsActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case ProjectsActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    case ProjectsActionTypes.SELECTED: {
      return { ...state, selected: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as projectsReducer };
