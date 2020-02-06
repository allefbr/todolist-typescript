import React from 'react';
import { ITodos } from 'store/todos/types';
import TodoItem from '../Item';
import { Wrapper } from './styles';

type Props = {
  todos: ITodos[];
  edit: boolean;
  projectId: number;
  exclude: boolean;
  handleChecked: (todo: ITodos) => void;
};

const List: React.FC<Props> = ({ todos, projectId, edit, exclude, handleChecked }) => (
  <Wrapper>
    {todos.map((todo: ITodos) => (
      <TodoItem
        key={`todos-${todo.id}`}
        todoId={todo.id}
        dateEnd={todo.dateEnd}
        edit={edit}
        projectId={projectId}
        exclude={exclude}
        title={todo.title}
        checked={todo.checked}
        status={todo.status}
        handleChecked={handleChecked}
      />
    ))}
  </Wrapper>
);

export default List;
