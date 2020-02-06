import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
`;

type HighlightProps = {
  active?: boolean;
  variant?: string;
};

const circleTop = (color: string) => {
  return css`
    &:before {
      content: '';
      position: absolute;
      top: -38px;
      right: -38px;

      width: 100px;
      height: 80px;
      background-color: ${color};
      border: 20px solid rgba(255, 255, 255, 0.25);
      z-index: 1;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: -38px;
      left: -38px;

      width: 80px;
      height: 80px;
      background-color: ${color};
      border-radius: 50px;
      border: 20px solid rgba(255, 255, 255, 0.25);

      z-index: 1;
    }
  `;
};

export const Highlight = styled.div`
  background-color: ${(props: HighlightProps) => (props.variant ? colors[props.variant] : '')};
  border-radius: 20px;
  margin-bottom: 25px;

  width: 100px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  font-size: 28px;
  font-weight: 700;
  color: ${colors.white};

  box-shadow: ${(props: HighlightProps) =>
    !props.active || !props.variant
      ? `0 0 0 7px ${colors.primary}`
      : `0 0 0 7px ${colors.primary}, 0 0 0 10px ${colors[props.variant]}`};

  position: relative;
  overflow: hidden;

  span {
    position: relative;
    z-index: 3;
  }

  ${(props: HighlightProps) => (props.variant ? circleTop(colors[props.variant]) : '')}
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin: 0;
  color: ${colors.text};
`;
