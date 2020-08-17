import React from 'react';
import { AppHeaer } from '../../components/organisms/index';
import { RegisterUserForm } from '../../components/templates/index';
import './Register.css';

export function Register() {
  return (
    <div className='register'> 
      <AppHeaer />
      <div className='register-content'>
        <RegisterUserForm />
      </div>
    </div>
  )
}