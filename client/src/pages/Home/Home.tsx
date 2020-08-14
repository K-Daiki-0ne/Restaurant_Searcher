import React from 'react';
import './Home.css';
import { HomeComponent } from '../../components/templates/index';
import { AppHeaer } from '../../components/organisms/AppHeader/AppHeader'

export function Home() {
  return (
    <div className='home'>
      <AppHeaer />
      <div className='image'>
        <HomeComponent />
      </div>
    </div>
  )
}