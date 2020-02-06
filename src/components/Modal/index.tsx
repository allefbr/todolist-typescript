import React from 'react';
import { MdClose } from 'react-icons/md';
import { Wrapper, ModalContent, ButtonClose } from './styles';

type Props = {
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ onClose, children }) => (
  <Wrapper>
    <ModalContent>
      {children}

      <ButtonClose onClick={onClose}>
        <MdClose />
      </ButtonClose>
    </ModalContent>
  </Wrapper>
);

export default Modal;
