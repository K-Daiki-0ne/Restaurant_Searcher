import React from 'react';
import { useRecoilValue } from 'recoil';
import { detailCurrentRestaurantAdress } from '../../../store/selectors/detailRestaurant';
import './DetailRestaurantAdressText.css'

export const DetailRestaurantAdressText = () => {
  const detailRestaurantAdress = useRecoilValue(detailCurrentRestaurantAdress);
  return (
    <div className='detail-restaurant-adress'>
      <p>{ detailRestaurantAdress }</p>
    </div>
  )
}