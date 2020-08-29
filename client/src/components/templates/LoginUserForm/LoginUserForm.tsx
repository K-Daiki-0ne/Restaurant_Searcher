import React from 'react';
import { Link } from 'react-router-dom';
import { LoginButtonText } from '../../atoms/index';
import { 
  LoginNameInputForm, 
  LoginPasswordInputForm 
} from '../../molecules/index';
import { LoginContent } from '../../organisms/index';
import { useRecoilValue } from 'recoil';
import {
  loginUserName,
  loginUserPassword
} from '../../../store/atoms/login';
import './LoginUserForm.css';

const { useState } = React;

export function LoginUserForm() {
  const [loginNameValid, setLoginNameValid] = useState<boolean>()
  const [loginPasswordValid, setLoginPasswordValid] = useState<boolean>()
  const [nameErrorMessage, setNameErrorMessage] = useState<string>('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('');

  const name = useRecoilValue(loginUserName);
  const password = useRecoilValue(loginUserPassword);

  const loginApp = () => {
    
  }

  return (
    <div className='login-content'>
      <LoginContent />
      <form className='login-form'>
        <LoginNameInputForm />
        <LoginPasswordInputForm />
      </form>
      <Link to='/'>
        <button className='login-content-button' onClick={show}>
          <LoginButtonText />
        </button>
      </Link>
    </div>
  )
}