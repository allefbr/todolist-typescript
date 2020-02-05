import React from 'react';
import TodoList from 'components/Todos/List';
import Dropdown from 'components/Dropdown';
import { Wrapper, Title } from './styles';

type Props = {
  title: string;
};

const Section: React.FC<Props> = ({ title }) => (
  <Wrapper>
    <Title>
      {title}
      <Dropdown />
    </Title>

    <TodoList />
  </Wrapper>
);

export default Section;
