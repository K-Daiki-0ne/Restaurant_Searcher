import React from 'react';
import { useRecoilValue } from 'recoil'
import { detailCurrentRestaurantName } from '../../../store/selectors/detailRestaurant';

export const DetailRestaurantTitle = () => {
  const detailRestName = useRecoilValue(detailCurrentRestaurantName);
  return (
    <p>{ detailRestName }</p>
  )
}