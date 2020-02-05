import React from 'react';
import { HeaderLogged, Projects, HeaderTodos } from 'components';
import TodoSection from 'components/Todos/Section';
import { Wrapper, ColumnLeft, ColumnRight, ContentSide, ContentColumnRight } from './styles';

const HomePage = () => (
  <Wrapper>
    <ColumnLeft>
      <ContentSide>
        <HeaderLogged title="Hi Samantha" description="Welcome back to the workspace, we missed you!" />
        <Projects title="Projects" count="12" />
      </ContentSide>
    </ColumnLeft>

    <ColumnRight>
      <ContentColumnRight>
        <HeaderTodos
          title="Cyber Punk"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing, elit, sed do eiusmod tempor incididunt"
        />

        <TodoSection title="Today" />
        <TodoSection title="Upcoming" />
      </ContentColumnRight>
    </ColumnRight>
  </Wrapper>
);

export default HomePage;
