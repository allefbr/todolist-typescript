import React from 'react';
import TodoItem from '../Item';
import { Wrapper } from './styles';

const List = () => (
  <Wrapper>
    <TodoItem title="Create initial layout for homepage" checked status="approved" />
    <TodoItem title="Create initial layout for homepage" checked status="approved" />
    <TodoItem title="Create initial layout for homepage" status="progress" />
    <TodoItem title="Create initial layout for homepage" status="waiting" />
  </Wrapper>
);

export default List;
