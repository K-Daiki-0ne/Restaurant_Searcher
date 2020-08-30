import React from 'react';
import { RegisterButtonText } from '../../atoms/index';
import './RegisterButton.css';
import { useRecoilValue } from 'recoil';
import {
  registerUserName,
  registerUserPassword
} from '../../../store/atoms/register';
import { registerUser } from '../../../api/registerUser';

export function RegisterButton() {
  const registerName = useRecoilValue(registerUserName);
  const registerPassword = useRecoilValue(registerUserPassword);

  const userStatus = () => {
    registerUser(registerName, registerPassword)
      .then((data: any) => console.log(data))
  }

  return (
    <button className='register-button' onClick={userStatus}>
      <RegisterButtonText />
    </button>
  )
}