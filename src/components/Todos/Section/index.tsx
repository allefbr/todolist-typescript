import React, { useState } from 'react';
import TodoList from 'components/Todos/List';
import Dropdown from 'components/Dropdown';
import { ITodos } from 'store/todos/types';
import { Wrapper, Title } from './styles';

type Props = {
  title: string;
  todos: ITodos[];
  projectId: number;
  handleChecked: (todo: ITodos) => void;
};

const Section: React.FC<Props> = ({ title, todos, projectId, handleChecked }) => {
  const [active, setActive] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [exclude, setExclude] = useState<boolean>(false);

  const handleOpen = () => {
    setActive(!active);
  };

  const handleExclude = () => {
    setEdit(false);
    setExclude(true);
    setActive(false);
  };

  const handleEdit = () => {
    setExclude(false);
    setActive(false);

    setEdit(true);
  };

  const handleCancel = () => {
    setExclude(false);
    setEdit(false);
    setActive(false);
  };

  return (
    <Wrapper>
      <Title>
        {title}
        <Dropdown
          active={active}
          edit={edit}
          exclude={exclude}
          handleOpen={handleOpen}
          handleEdit={handleEdit}
          handleExclude={handleExclude}
          handleCancel={handleCancel}
        />
      </Title>

      <TodoList todos={todos} edit={edit} exclude={exclude} handleChecked={handleChecked} projectId={projectId} />
    </Wrapper>
  );
};

export default Section;
