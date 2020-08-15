import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderLoginText } from '../../atoms/index';
import './LoginButton.css';

export function LoginButton() {
  return (
    <div>
      <Link to='/login' className='link'>
        <HeaderLoginText />
      </Link>
    </div>
  )
}