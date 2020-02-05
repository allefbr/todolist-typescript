import styled from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.section``;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 30px;
`;

export const Count = styled.span`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0;
  color: ${colors.text};
  margin-left: 8px;
`;
