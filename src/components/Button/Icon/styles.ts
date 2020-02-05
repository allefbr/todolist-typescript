import styled from 'styled-components';

export const Wrapper = styled.button`
  border: 0;
  background-color: transparent;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  flex: none;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: 0;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
