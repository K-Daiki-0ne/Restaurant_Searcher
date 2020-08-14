import React from 'react';
import { HeaderTitleText } from '../../atoms/index';
import { Link } from 'react-router-dom'
import './HomeButton.css';

export const HomeButton: React.FC = () => {
  return (
    <div>
      <Link to='/' className='link'>
        <HeaderTitleText />
      </Link>
    </div>
  )
}