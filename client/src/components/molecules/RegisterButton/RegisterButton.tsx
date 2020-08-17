import React from 'react';
import { RegisterButtonText } from '../../atoms/index';
import './RegisterButton.css';

export function RegisterButton() {
  return (
    <button className='register-button'>
      <RegisterButtonText />
    </button>
  )
}