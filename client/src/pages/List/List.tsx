import React from 'react';
import { AppHeaer } from '../../components/organisms/index';
import { ListRestaurantCard } from '../../components/templates/index';
import './List.css';

export function List() {
  return (
    <div className='list'>
      <AppHeaer />
      <div className='content'>
        <ListRestaurantCard />
      </div>
    </div>
  )
}