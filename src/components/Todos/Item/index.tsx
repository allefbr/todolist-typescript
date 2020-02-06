import React from 'react';
import { ITodos } from 'store/todos/types';
import capitalizeFirstLetter from 'utils/captitalize';
import ButtonIcon from 'components/Button/Icon';
import { MdRadioButtonUnchecked, MdCheckCircle, MdEdit, MdDelete } from 'react-icons/md';
import { Wrapper, Title, Status } from './styles';

type Props = {
  todoId: number;
  projectId: number;
  dateEnd: string;
  title: string;
  status: string;
  checked: boolean;
  edit?: boolean;
  exclude?: boolean;
  handleChecked: (todo: ITodos) => void;
};

const Item: React.FC<Props> = ({
  todoId,
  projectId,
  dateEnd,
  title,
  checked,
  status,
  edit,
  exclude,
  handleChecked,
}) => {
  const handleCheckedInner = () => {
    const todo = {
      id: todoId,
      projectId,
      title,
      checked: !checked,
      status,
      dateEnd,
    };

    handleChecked(todo);
  };

  return (
    <Wrapper>
      <Title checked={checked}>
        <ButtonIcon handleClick={handleCheckedInner}>
          {checked ? <MdCheckCircle /> : <MdRadioButtonUnchecked />}
        </ButtonIcon>

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
};

export default Item;
