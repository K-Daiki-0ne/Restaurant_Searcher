import React from 'react'
import './AppHeader.css';
import { HomeButton } from '../../molecules/index';

export function AppHeaer() {
  return (
    <header className='header'>
      <HomeButton />
    </header>
  )
}