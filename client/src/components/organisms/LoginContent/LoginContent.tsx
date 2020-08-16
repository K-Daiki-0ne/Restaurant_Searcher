import React from 'react';
import {
  LoginDescriptionText,
  LoginGuideText
} from '../../atoms/index';
import './LoginContent.css';

export function LoginContent() {
  return (
    <div className='login-content'>
      <LoginDescriptionText />
      <LoginGuideText />
    </div>
  )
}