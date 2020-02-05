import React from 'react';
import getInitials from 'utils/getInitials';
import { Wrapper, Title, Highlight } from './styles';

type Props = {
  title: string;
  active?: boolean;
  variant?: string;
  noTitle?: boolean;
};

const Card: React.FC<Props> = ({ title, variant, active, noTitle }) => {
  const initial = getInitials(title);

  return (
    <Wrapper>
      <Highlight active={active} variant={variant}>
        <span>{initial}</span>
      </Highlight>
      {!noTitle && <Title>{title}</Title>}
    </Wrapper>
  );
};

export default Card;
