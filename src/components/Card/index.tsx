import React, { useState } from 'react';
import getInitials from 'utils/getInitials';
import { Wrapper, Title, Highlight } from './styles';

type Props = {
  projectId: number;
  title: string;
  active?: boolean | undefined;
  variant?: string;
  noTitle?: boolean;
  handleClick?: (id: number) => void;
};

const Card: React.FC<Props> = ({ projectId, title, variant, active, noTitle, handleClick }) => {
  const initial = getInitials(title);

  const [act, setAct] = useState<boolean | undefined>(active || false);

  const handleClickInner = () => {
    if (handleClick) return handleClick(projectId);

    setAct(!act);
  };

  return (
    <Wrapper>
      <Highlight active={act} variant={variant} onClick={handleClickInner}>
        <span>{initial}</span>
      </Highlight>

      {!noTitle && <Title>{title}</Title>}
    </Wrapper>
  );
};

export default Card;
