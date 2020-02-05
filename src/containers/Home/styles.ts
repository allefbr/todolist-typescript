import styled, { css } from 'styled-components';
import colors from 'styles/colors';

export const Wrapper = styled.section`
  display: flex;
  align-items: stretch;
  justify-content: center;
  height: 100vh;
  padding: 15px;
`;

const columnDefaultProps = css`
  padding: 80px;
  display: flex;
  justify-content: center;
`;

export const ColumnLeft = styled.aside`
  width: 100%;

  ${columnDefaultProps}
`;

export const ColumnRight = styled.article`
  width: 100%;
`;

export const ContentSide = styled.div`
  max-width: 400px;
`;

export const ContentColumnRight = styled.div`
  max-width: 680px;
  height: 100%;
  background-color: ${colors.white};
  border-radius: 20px;
  ${columnDefaultProps}

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
