import React from 'react';
import { useRecoilValue } from 'recoil';
import { detailCurrentRestaurantPr } from '../../../store/selectors/detailRestaurant';

export function DetailRestaurantPr() {
  const detailRestaurantPr = useRecoilValue(detailCurrentRestaurantPr);
  console.log(detailRestaurantPr)
  return (
    <div>
      <p>abc</p>
    </div>
  )
}