import React from 'react';
import { Link } from 'react-router-dom';
import { LoginButtonText } from '../../atoms/index';
import { 
  LoginNameInputForm, 
  LoginPasswordInputForm 
} from '../../molecules/index';
import { LoginContent } from '../../organisms/index';
import { 
  useRecoilValue,
  useSetRecoilState
} from 'recoil';
import {
  loginUserName,
  loginUserPassword
} from '../../../store/atoms/login';
import { loginUser } from '../../../store/atoms/loginUser';
import { loginRequest } from '../../../api/loginRequest';
import './LoginUserForm.css';

const { useState } = React;

export function LoginUserForm() {
  const [loginNameValid, setLoginNameValid] = useState<boolean>()
  const [loginPasswordValid, setLoginPasswordValid] = useState<boolean>()
  const [nameErrorMessage, setNameErrorMessage] = useState<string>('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('');

  const name = useRecoilValue(loginUserName);
  const password = useRecoilValue(loginUserPassword);
  const userInformation = useSetRecoilState(loginUser);

  const loginApp = async () => {
    const loginUserInformation = await loginRequest(name, password);
    userInformation(loginUserInformation)
  }

  return (
    <div className='login-content'>
      <LoginContent />
      <form className='login-form'>
        <LoginNameInputForm />
        <LoginPasswordInputForm />
      </form>
      <Link to='/'>
        <button className='login-content-button' onClick={loginApp}>
          <LoginButtonText />
        </button>
      </Link>
    </div>
  )
}