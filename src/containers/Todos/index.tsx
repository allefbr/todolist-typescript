import React from 'react';
import TodoSection from 'components/Todos/Section';
import getToday from 'utils/getToday';
import { HeaderTodos } from 'components';
import { ITodos } from 'store/todos/types';
import { IProjects } from 'store/projects/types';

type Props = {
  todos: ITodos[];
  projectSelected: IProjects;
  handleChecked: (todo: ITodos) => void;
};

const TodosPage: React.FC<Props> = ({ todos, projectSelected, handleChecked }) => {
  const today = getToday();
  const todosToday = todos.filter((todo: ITodos) => todo.dateEnd === today);
  const todosUpcoming = todos.filter((todo: ITodos) => todo.dateEnd !== today);

  const { title, description, id } = projectSelected;

  return (
    <>
      <HeaderTodos title={title} description={description} />

      {todosToday.length > 0 && (
        <TodoSection title="Today" todos={todosToday} handleChecked={handleChecked} projectId={id} />
      )}
      {todosUpcoming && (
        <TodoSection title="Upcoming" todos={todosUpcoming} handleChecked={handleChecked} projectId={id} />
      )}
    </>
  );
};

export default TodosPage;
