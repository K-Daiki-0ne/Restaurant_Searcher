import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { 
  detailCurrentRestaurantPr, 
  detailCurrentRestaurntCategory
} from '../../../store/selectors/detailRestaurant';

export function DetailRestaurantPr() {
  const [isPr, setPr] = useState<boolean>(false);
  const detailRestaurantPr = useRecoilValue(detailCurrentRestaurantPr);
  const detailRestCategory = useRecoilValue(detailCurrentRestaurntCategory);
  
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
      <p>ジャンル：{ detailRestCategory }</p>
      <p>{ detailRestaurantPr }</p>
    </div>
  ) : (
    <div>
      <p>ジャンル：{ detailRestCategory }</p>
      <p>お店の詳細情報はございません</p>
    </div>
  )
}