import styled from 'styled-components';
import { darken } from 'polished';
import { typeColors } from 'styles/colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type titleProps = {
  status: string;
};

export const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 16px;
  font-weight: 600;
  color: #767887;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 8px;

  & > svg {
    width: 24px;
    height: 24px;
    flex: none;
    margin-right: 8px;
    cursor: pointer;
    fill: ${(props: titleProps) => (props.status === 'approved' ? '#36d9d8' : '#d7e1e9')};
  }
`;

const pallete: typeColors = {
  approved: '#e0f5f4',
  waiting: '#eceef0',
  progress: '#e3effd',
};

type statusProps = {
  status: string;
};

export const Status = styled.strong`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  border-radius: 30px;
  line-height: 1;
  font-size: 12px;
  padding: 9px;
  color: ${(props: statusProps) => (props.status ? `${darken(0.6, pallete[props.status])}` : '')};
  background-color: ${(props: statusProps) => (props.status ? `${pallete[props.status]}` : '')};
`;
