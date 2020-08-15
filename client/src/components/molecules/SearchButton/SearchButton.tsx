import React from 'react';
import { Link } from 'react-router-dom';
import { SeaarchIcon } from '../../atoms/index';

export function SearchButton() {
  return (
    <div>
      <Link to={`/detail`}>
        <button>
          <SeaarchIcon />
        </button>
      </Link>
    </div>
  )
}