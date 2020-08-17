import React from 'react';
import { 
  AppHeaer,
} from '../../components/organisms/index';
import { LoginUserForm } from '../../components/templates/index';
import './Login.css';

export function Login() {
  return (
    <div className='login'>
      <AppHeaer />
      <div className='content'>
        <LoginUserForm />
      </div>
    </div>
  )
}