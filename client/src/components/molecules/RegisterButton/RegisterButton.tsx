import React from 'react';
import { RegisterButtonText } from '../../atoms/index';
import './RegisterButton.css';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  registerUserName,
  registerUserPassword
} from '../../../store/atoms/register';
import { registerUser } from '../../../store/atoms/registerUser';
import { postRegisterUser } from '../../../api/registerUser';

export function RegisterButton() {
  const registerName = useRecoilValue(registerUserName);
  const registerPassword = useRecoilValue(registerUserPassword);

  const registerUserInformation = useSetRecoilState(registerUser);

  const userStatus = () => {
    postRegisterUser(registerName, registerPassword)
      .then((data: any) => registerUserInformation(data))
  }

  return (
    <button className='register-button' onClick={userStatus}>
      <RegisterButtonText />
    </button>
  )
}