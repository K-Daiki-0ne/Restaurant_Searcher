import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderTitleText } from '../../atoms/index';

export function HomeButton() {
  return (
    <div>
      <Link to="/">
        <button>
          <HeaderTitleText />
        </button>
      </Link>
    </div>
  )
}