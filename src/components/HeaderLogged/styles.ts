import styled from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.header`
  color: ${colors.white};
  margin-bottom: 80px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 0;
  color: inherit;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0;
  color: ${colors.text};
`;
