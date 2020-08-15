import React from 'react'
import './AppHeader.css';
import { 
  HomeButton,
  LoginButton,
  QuestionButton
} from '../../molecules/index';

export function AppHeaer() {
  return (
    <header className='header'>
      <nav className='question-button'>
        <QuestionButton />
      </nav>
      <div className='main-text'>
        <HomeButton />
      </div>
      <nav className='login-button'>
        <LoginButton />
      </nav>
    </header>
  )
}