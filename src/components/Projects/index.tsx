import React from 'react';
import Cards from 'components/Cards';
import { IProjects } from 'store/projects/types';
import { Wrapper, Title, Count } from './styles';

type Props = {
  title: string;
  count: number;
  projects: IProjects[];
  handleClick?: (id: number) => void;
};

const Projects: React.FC<Props> = ({ title, count, projects, handleClick }) => (
  <Wrapper>
    <Title>
      {title}
      <Count>{`(${count})`}</Count>
    </Title>

    <Cards projects={projects} total={count} handleClick={handleClick} />
  </Wrapper>
);

export default Projects;
