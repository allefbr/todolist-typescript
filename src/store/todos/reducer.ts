import { Reducer } from 'redux';
import { TodosState, TodosActionTypes, ITodos } from './types';

export const initialState: TodosState = {
  data: [],
  errors: undefined,
  loading: false,
};

const reducer: Reducer<TodosState> = (state = initialState, action) => {
  switch (action.type) {
    case TodosActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case TodosActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case TodosActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    case TodosActionTypes.EDIT: {
      const newTodo = state.data.map((todo: ITodos) => {
        if (todo.id === action.payload.id) {
          todo = action.payload;
        }

        return todo;
      });

      return { ...state, data: newTodo };
    }
    case TodosActionTypes.CREATE: {
      return { ...state, data: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as todosReducer };
