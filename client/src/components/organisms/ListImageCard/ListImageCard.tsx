import React from 'react';
import { Link } from 'react-router-dom';

export const ListImageCard = () => {
  return (
    <div>
      <Link to='/detail'>
        <p>お店の画像</p>
      </Link>
    </div>
  )
}