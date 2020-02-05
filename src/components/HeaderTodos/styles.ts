import styled from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.header`
  color: ${colors.text};
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin: 0;
  color: ${colors.primary};
`;

export const Description = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 0;
  color: inherit;
  line-height: 1.8;
`;
