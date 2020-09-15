import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { detailCurrentRestaurantPr } from '../../../store/selectors/detailRestaurant';

export function DetailRestaurantPr() {
  const [isPr, setPr] = useState<boolean>(false);
  const detailRestaurantPr = useRecoilValue(detailCurrentRestaurantPr);
  
  useEffect(() => {
    setPr(false);
    try {
      if(detailRestaurantPr) {
        setPr(true);
      } else {
        setPr(false);
      }
    } catch(err) {
      setPr(false);
    }
  }, [])

  return isPr ? (
    <div>
      <p>{ detailRestaurantPr }</p>
    </div>
  ) : (
    <div>
      <p>お店の詳細情報はございません</p>
    </div>
  )
}