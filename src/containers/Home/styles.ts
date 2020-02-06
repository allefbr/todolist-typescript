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
  overflow: auto;
  ${columnDefaultProps}

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const EmptyProject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-size: 15px;
  font-weight: 500;
  color: ${colors.text};

  margin: auto;

  & > svg {
    width: 30px;
    height: 30px;
    margin-bottom: 15px;
    fill: ${colors.text};
  }
`;

export const ButtonAdd = styled.button`
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  border: 0;
  border-radius: 15px;
  background-color: #894fc6;
  cursor: pointer;
  outline: none;
  transition: all;

  &:active {
    transform: scale(0.95);
  }

  & > svg {
    width: 28px;
    height: 28px;
    fill: ${colors.white};
  }
`;
