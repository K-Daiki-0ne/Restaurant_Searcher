import React from 'react';
import { AppHeaer } from '../../components/organisms/index';
import { ListRestaurantCard } from '../../components/templates/index';
import { userCurrentLocation } from '../../store/atoms/location';
import { useRecoilValue } from 'recoil';
import './List.css';

export function List() {
  const location = useRecoilValue(userCurrentLocation);
  console.log(location)
  return (
    <div className='list'>
      <AppHeaer />
      <div className='list-content'>
        <ListRestaurantCard />
      </div>
    </div>
  )
}