import React from 'react'
import './AppHeader.css';
import { HomeButton } from '../../molecules/index';

export function AppHeaer() {
  return (
    <div className='header'>
      <HomeButton />
    </div>
  )
}