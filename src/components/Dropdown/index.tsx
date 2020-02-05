import React, { useState } from 'react';
import ButtonIcon from 'components/Button/Icon';
import { MdMoreHoriz } from 'react-icons/md';

import { Wrapper, DropdownList, DropdownItem } from './styles';

export type DropdownProps = {
  active?: boolean;
};

const Dropdown: React.FC<DropdownProps> = ({ active }) => {
  const [open, setOpen] = useState(active);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <Wrapper>
      <ButtonIcon handleClick={handleClick}>
        <MdMoreHoriz />
      </ButtonIcon>

      <DropdownList active={open}>
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Delete</DropdownItem>
      </DropdownList>
    </Wrapper>
  );
};

export default Dropdown;
