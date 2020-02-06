import React from 'react';
import Card from 'components/Card';
import { IProjects } from 'store/projects/types';
import { Wrapper } from './styles';

type Props = {
  projects: IProjects[];
  total: number;
  handleClick?: (id: number) => void;
};

const Cards: React.FC<Props> = ({ projects, total, handleClick }) => {
  const variant = ['pink', 'green', 'purple', 'blue', 'orange'];
  const rest = total - 5;

  return (
    <Wrapper>
      {projects?.map((project: IProjects, index: number) => {
        if (index > 4) return null;
        return (
          <Card
            key={`cards-${project.id}`}
            projectId={project.id}
            title={project.title}
            variant={variant[index]}
            handleClick={handleClick}
          />
        );
      })}

      {rest > 0 && <Card projectId={0} title={`${rest} +`} noTitle variant="blackLight" />}
    </Wrapper>
  );
};

export default Cards;
