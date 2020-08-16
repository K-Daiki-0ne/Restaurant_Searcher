import React from 'react';
import { AppHeaer } from '../../components/organisms/index';
import {
  LoginDescriptionText,
  LoginGuideText
} from '../../components/atoms/index';
import './Login.css';

export function Login() {
  return (
    <div className='login'>
      <AppHeaer />
      <div className='content'>
        <LoginDescriptionText />
        <LoginGuideText />
      </div>
    </div>
  )
}