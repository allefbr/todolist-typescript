import React from 'react';
import ButtonIcon from 'components/Button/Icon';
import { MdMoreHoriz } from 'react-icons/md';

import { Wrapper, DropdownList, DropdownItem } from './styles';

export type DropdownProps = {
  active?: boolean;
  edit: boolean;
  exclude: boolean;
  handleOpen: () => void;
  handleEdit: () => void;
  handleExclude: () => void;
  handleCancel: () => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  active,
  edit,
  exclude,
  handleOpen,
  handleEdit,
  handleExclude,
  handleCancel,
}) => {
  return (
    <Wrapper>
      <ButtonIcon handleClick={handleOpen}>
        <MdMoreHoriz />
      </ButtonIcon>

      <DropdownList active={active}>
        <DropdownItem onClick={handleEdit}>Edit</DropdownItem>
        <DropdownItem onClick={handleExclude}>Delete</DropdownItem>
        {edit || exclude ? <DropdownItem onClick={handleCancel}>Cancel</DropdownItem> : ''}
      </DropdownList>
    </Wrapper>
  );
};

export default Dropdown;
