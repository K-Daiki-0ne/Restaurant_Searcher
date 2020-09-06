import React from 'react';
import { Link } from 'react-router-dom';

type RestaurantNameProps = {
  name: string;
}

export const ListTitle: React.FC<RestaurantNameProps> = ({ name }): JSX.Element => {
  return (
    <div>
      <h4>{ name }</h4>
    </div>
  )
}
