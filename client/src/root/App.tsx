import React from 'react';
import { RecoilRoot } from 'recoil';
import { Router } from '../router/Router';
import { AppFooter } from '../components/organisms/index';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className='app'>
        <Router />
        <AppFooter />
      </div>
    </RecoilRoot>
  )
}

export default App;