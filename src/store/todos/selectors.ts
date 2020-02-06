import { ApplicationState } from 'store';

const getTodos = (state: ApplicationState) => state.todos.data;
const getTotalTodos = (state: ApplicationState) => state.todos.data.length;

const todosSelectors = {
  getTodos,
  getTotalTodos,
};

export default todosSelectors;
