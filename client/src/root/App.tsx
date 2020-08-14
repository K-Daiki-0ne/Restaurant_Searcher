import React from 'react';
import { Router } from '../router/Router';
import { AppFooter } from '../components/organisms/index';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Router />
      <AppFooter />
    </div>
  )
}

export default App;