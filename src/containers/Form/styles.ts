import styled from 'styled-components';
import colors from 'styles/colors';
import { darken } from 'polished';

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 30px;
`;

export const FormTitle = styled.legend`
  font-size: 38px;
  font-weight: 700;
  margin: 0 0 45px;
  text-align: center;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  font-size: 14px;
  font-weight: 500;
  border-radius: 3px;
  padding: 8px;
  border: 1px solid #ccc;
  outline: 0;
  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: ${colors.primary};
  }
`;

export const ButtonSend = styled.button`
  border: 0;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  background-color: #894fc6;
  color: ${colors.white};
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${darken(0.2, '#894fc6')};
  }
`;

export const ErrorMsg = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-top: 5px;
  color: #e74c3c;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Radio = styled.label`
  margin-right: 5px;
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;

  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  font-weight: 700;
  color: #fff;
  cursor: pointer;

  margin-right: 5px;

  input {
    opacity: 0;
    display: none;

    &:checked ~ span {
      background-color: #894fc6;
    }
  }
`;

export const RadioMaker = styled.span`
  width: 100%;
  height: 100%;
  background-color: ${colors.text};

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const RadioStatus = styled.label`
  margin-right: 5px;
  width: 90px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  padding: 5px;

  margin-right: 5px;
  margin-bottom: 5px;

  input {
    opacity: 0;
    display: none;

    &:checked ~ span {
      background-color: #894fc6;
    }
  }
`;

export const RadioStatusMaker = styled.span`
  width: 100%;
  height: 100%;
  background-color: ${colors.text};

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
