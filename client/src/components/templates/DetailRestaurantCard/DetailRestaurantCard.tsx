import React, { useEffect } from 'react';
import { userCurrentDetailRestaurant } from '../../../store/atoms/detailRestaurant';
import { useRecoilValue } from 'recoil';
import { 
  DetailRestaurantTitle,
  DetailRestaurantAdressText,
  DetailRestaurantPr
} from '../../atoms/index';
import './DetailRestaurantCard.css';

export const DetailRestrauntCard: React.FC = () => {
  const detailRest = useRecoilValue(userCurrentDetailRestaurant);

  useEffect(() => {
    console.log(detailRest)
  }, [])

  return (
    <div className='detail-restaurant-card'>
      <div className='detail-rest-name-content'>
        <h1 className='detail-name'>
          <DetailRestaurantTitle />
        </h1>
      </div>
      <div className='detail-rest-grid-content'>
        <div className='detail-rest-low-grid-left-content'>
          <div className='detail-image'>
            aaa
          </div>
          <div className='detail-pr'>
            <DetailRestaurantPr />
          </div>
        </div>
        <div className='detail-rest-low-grid-content'>
          <div className='detail-adress'>
            <DetailRestaurantAdressText />
          </div>
          <div className='detail-map'>
            ccc
          </div>
        </div>
      </div>
    </div>
  )
}