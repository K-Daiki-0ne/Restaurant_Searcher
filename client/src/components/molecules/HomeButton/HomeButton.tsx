import React from 'react';
import { HeaderTitleText } from '../../atoms/index';
import { Link } from 'react-router-dom'


export const HomeButton: React.FC = () => {
  return (
    <div>
      <Link to='/'>
        <HeaderTitleText />
      </Link>
    </div>
  )
}