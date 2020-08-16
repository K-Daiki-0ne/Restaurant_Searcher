import React from 'react';
import { AppHeaer } from '../../components/organisms/index';
import {
  ErrorIcon,
  ErrorText
} from '../../components/atoms/index';
import './Error.css'

export function Error() {
  return (
    <div className='error'>
      <AppHeaer />
      <div className='error-content'>
        <div>
          <ErrorIcon />
        </div>
        <div>
          <ErrorText />
        </div>
      </div>
    </div>
  )
}