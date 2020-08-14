import React from 'react';
import { Router } from '../router/Router';
import './App.css';
import { AppHeaer } from '../components/organisms/index';

function App() {
  return (
    <div>
      <AppHeaer />
      <Router />
    </div>
  )
}

export default App;