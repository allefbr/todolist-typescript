import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Wrapper = styled.section`
  margin-bottom: 60px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.primary};
  margin-top: 0;
  padding-bottom: 12px;
  border-bottom: 2px solid ${colors.whiteStrong};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
