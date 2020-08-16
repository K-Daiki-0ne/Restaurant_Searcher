import React from 'react';
import { Link } from 'react-router-dom';

export const ListAdressCard = () => {
  return (
    <div>
      <Link to='/detail'>
        <p>お店の住所</p>
      </Link>
    </div>
  )
}