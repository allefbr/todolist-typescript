import React from 'react';

import { Wrapper, Title, Description } from './styles';

type Props = {
  title: string;
  description: string;
};

const HeaderLogged: React.FC<Props> = ({ title, description }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Wrapper>
);

export default HeaderLogged;
