import React from 'react';
import { Link } from 'react-router-dom';
import { SeaarchIcon } from '../../atoms/index';
import './SearchButton.css'


export function SearchButton() {
    return (
    <div className='search'>
      <Link to={`/list`} className='link'>
        <button className='search-button' >
          <SeaarchIcon />
        </button>
      </Link>
    </div>
  )
}