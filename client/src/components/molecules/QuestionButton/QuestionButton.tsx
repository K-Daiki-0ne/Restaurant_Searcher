import React, { useState } from 'react';
import Modal from 'react-modal';
import { 
  HeaderQuestionIcon,
  ModalCloseIcon,
  ModalDescriptionText 
} from '../../atoms/index';
import './QuestionButton.css';

Modal.setAppElement('#root');

export const QuestionButton: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className='question'>
      <button onClick={openModal} className='question-button'>
        <HeaderQuestionIcon />
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel='RestrauntSearcherについて'
      >
        <button onClick={closeModal} className='close'>
          <ModalCloseIcon />
        </button>
        <ModalDescriptionText />
      </Modal>
    </div>
  )
}