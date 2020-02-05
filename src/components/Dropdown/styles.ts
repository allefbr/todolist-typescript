import styled from 'styled-components';
import colors from 'styles/colors';
import { DropdownProps } from 'components/Dropdown';

export const Wrapper = styled.div`
  position: relative;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 105%;
  right: 0;
  background-color: ${colors.white};
  list-style: none;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  padding: 0;
  margin: 0;

  display: ${(props: DropdownProps) => (props.active ? 'block' : 'none')};
`;

export const DropdownItem = styled.li`
  padding: 5px 15px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 600;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
