import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  Home,
  List,
  Detail,
  Login,
  Register,
  Error
} from '../pages/index';

export const Router: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path='/list' component={List} />
      <Route path='/detail' component={Detail} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/error' component={Error} />
    </BrowserRouter>
  )
}