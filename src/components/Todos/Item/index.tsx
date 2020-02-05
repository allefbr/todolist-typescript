import React from 'react';
import capitalizeFirstLetter from 'utils/captitalize';
import ButtonIcon from 'components/Button/Icon';
import { MdRadioButtonUnchecked, MdCheckCircle, MdEdit, MdDelete } from 'react-icons/md';
import { Wrapper, Title, Status } from './styles';

type Props = {
  title: string;
  status: string;
  checked?: boolean;
  edit?: boolean;
  exclude?: boolean;
};

const Item: React.FC<Props> = ({ title, checked, status, edit, exclude }) => (
  <Wrapper>
    <Title status={status}>
      {checked ? <MdCheckCircle /> : <MdRadioButtonUnchecked />}
      {title}
    </Title>
    <Status status={status}>{capitalizeFirstLetter(status)}</Status>

    {edit && (
      <ButtonIcon>
        <MdEdit />
      </ButtonIcon>
    )}

    {exclude && (
      <ButtonIcon>
        <MdDelete />
      </ButtonIcon>
    )}
  </Wrapper>
);

export default Item;
