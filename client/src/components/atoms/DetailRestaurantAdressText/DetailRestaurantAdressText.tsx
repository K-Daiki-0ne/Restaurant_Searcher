import React from 'react';
import { useRecoilValue } from 'recoil';
import { detailCurrentRestaurantAdress } from '../../../store/selectors/detailRestaurant';

export const DetailRestaurantAdressText = () => {
  const detailRestaurantAdress = useRecoilValue(detailCurrentRestaurantAdress);
  return (
    <div>
      <p>{ detailRestaurantAdress }</p>
    </div>
  )
}