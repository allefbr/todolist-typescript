import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  padding: 60px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14),
    0px 1px 14px 0px rgba(0, 0, 0, 0.12);
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: -10px;
  right: -15px;
  cursor: pointer;
  background-color: #894fc6;
  border: 0;
  border-radius: 50%;

  width: 35px;
  height: 35px;
  outline: 0;

  & > svg {
    width: 16px;
    height: 16px;
    fill: #fff;
  }
`;
