import React from 'react';
import { Link } from 'react-router-dom';

export const ListTitle: React.FC = () => {
  return (
    <div>
      <Link to='/detail'>
        <p>お店の名前</p>
      </Link>
    </div>
  )
}
