import React from 'react';
import { Wrapper } from './styles';

type Props = {
  handleClick?: () => void;
};

const Icon: React.FC<Props> = ({ handleClick, children }) => <Wrapper onClick={handleClick}>{children}</Wrapper>;

export default Icon;
