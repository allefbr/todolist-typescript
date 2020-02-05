import React from 'react';
import Cards from 'components/Cards';
import { Wrapper, Title, Count } from './styles';

type Props = {
  title: string;
  count: string;
};

const Projects: React.FC<Props> = ({ title, count }) => (
  <Wrapper>
    <Title>
      {title}
      <Count>{`(${count})`}</Count>
    </Title>

    <Cards />
  </Wrapper>
);

export default Projects;
