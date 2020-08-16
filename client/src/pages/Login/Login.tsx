import React from 'react';
import {
  LoginDescriptionText,
  LoginGuideText
} from '../../components/atoms/index';

export function Login() {
  return (
    <div className='login'>
      <div className='text'>
        <LoginDescriptionText />
        <LoginGuideText />
      </div>
    </div>
  )
}