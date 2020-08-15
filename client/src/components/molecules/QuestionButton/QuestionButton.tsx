import React, { useState } from 'react';
import { HeaderQuestionIcon } from '../../atoms/index';
import Modal from 'react-modal';

export const QuestionButton: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>
        <HeaderQuestionIcon />
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel='RestrauntSearcherについて'
      >
        <button onClick={closeModal}>
          Close
        </button>
        <p>
          サンプル
        </p>
      </Modal>
    </div>
  )
}