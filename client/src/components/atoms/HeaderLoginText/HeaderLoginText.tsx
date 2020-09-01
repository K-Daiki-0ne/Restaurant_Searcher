import React from 'react';
import { useRecoilValue } from 'recoil';
import { serviceRegistedUserName } from '../../../store/selectors/userName';
import './HeaderLoginText.css';

export function HeaderLoginText() {
  const headerLoginText = useRecoilValue(serviceRegistedUserName);
  return (
    <div className='login-text'>
      <h2>{ headerLoginText }</h2>
    </div>
  )
}