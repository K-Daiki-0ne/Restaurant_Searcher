import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderLoginText } from '../../atoms/index';

export function LoginButton() {
  return (
    <div>
      <Link to='/login'>
        <HeaderLoginText />
      </Link>
    </div>
  )
}