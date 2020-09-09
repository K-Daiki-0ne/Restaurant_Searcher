import React from 'react';
import './DetailRestaurantCard.css';

export const DetailRestrauntCard: React.FC = () => {
  return (
    <div className='detail-restaurant-card'>
      <div className='detail-rest-name-content'>
        <h1 className='detail-name'>お店の名前</h1>
      </div>
      <div className='detail-rest-grid-content'>
        <div className='detail-rest-low-grid-left-content'>
          <div className='detail-image'>
            aaa
          </div>
          <div className='detail-pr'>
            ddd
          </div>
        </div>
        <div className='detail-rest-low-grid-content'>
          <div className='detail-adress'>
            bbb
          </div>
          <div className='detail-map'>
            ccc
          </div>
        </div>
      </div>
    </div>
  )
}