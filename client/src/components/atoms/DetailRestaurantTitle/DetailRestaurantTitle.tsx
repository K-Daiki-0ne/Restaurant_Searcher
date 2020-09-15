import React from 'react';
import { useRecoilValue } from 'recoil'
import { detailCurrentRestaurantName } from '../../../store/selectors/detailRestaurant';
import './DetailRestaurantTitle.css';

export const DetailRestaurantTitle = () => {
  const detailRestName = useRecoilValue(detailCurrentRestaurantName);
  return (
    <div className='detail-restaurant-title'>
      <p>{ detailRestName }</p>
    </div>
  )
}