import React from 'react';
import { 
  AppHeaer,
  LoginContent 
} from '../../components/organisms/index';
import './Login.css';

export function Login() {
  return (
    <div className='login'>
      <AppHeaer />
      <div className='content'>
        <LoginContent />
      </div>
    </div>
  )
}