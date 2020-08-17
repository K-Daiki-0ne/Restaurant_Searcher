import React from 'react';
import { RegisterMainText } from '../../atoms/index';
import {
  RegisterNameInputForm,
  RegisterPasswordInputForm,
  RegisterButton
} from '../../molecules/index';
import './RegisterUserForm.css'

export function RegisterUserForm() {
  return (
    <div className='register-page-content'>
      <RegisterMainText />
      <form className='register-form'>
        <RegisterNameInputForm />
        <RegisterPasswordInputForm />
      </form>
      <RegisterButton />
    </div>
  )
}