import React from 'react'
import './AppHeader.css';
import { 
  HomeButton,
  LoginButton 
} from '../../molecules/index';

export function AppHeaer() {
  return (
    <header className='header'>
      <div className='main-text'>
        <HomeButton />
      </div>
      <nav className='login-button'>
        <LoginButton />
      </nav>
    </header>
  )
}