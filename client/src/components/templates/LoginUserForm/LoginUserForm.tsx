import React from 'react';
import { Link } from 'react-router-dom';
import { LoginButtonText } from '../../atoms/index';
import { 
  LoginNameInputForm, 
  LoginPasswordInputForm 
} from '../../molecules/index';
import { LoginContent } from '../../organisms/index';
import './LoginUserForm.css';

export function LoginUserForm() {
  return (
    <div className='login-content'>
      <LoginContent />
      <form className='login-form'>
        <LoginNameInputForm />
        <LoginPasswordInputForm />
      </form>
      <Link to='/'>
        <button className='login-content-button'>
          <LoginButtonText />
        </button>
      </Link>
    </div>
  )
}