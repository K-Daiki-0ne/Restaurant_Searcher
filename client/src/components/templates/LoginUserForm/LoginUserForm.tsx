import React from 'react';
import { 
  LoginNameInputForm, 
  LoginPasswordInputForm 
} from '../../molecules/index';
import './LoginUserForm.css';

export function LoginUserForm() {
  return (
    <div>
      <form className='login-form'>
        <LoginNameInputForm />
        <LoginPasswordInputForm />
      </form>
    </div>
  )
}