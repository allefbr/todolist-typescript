import { combineReducers } from 'redux';

import { TodosState } from './todos/types';
import { todosReducer } from './todos/reducer';
import { ProjectsState } from './projects/types';
import { projectsReducer } from './projects/reducer';

export interface ApplicationState {
  todos: TodosState;
  projects: ProjectsState;
}

export const createRootReducer = () => {
  return combineReducers({
    todos: todosReducer,
    projects: projectsReducer,
  });
};
