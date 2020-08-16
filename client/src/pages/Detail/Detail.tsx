import React from 'react';
import { AppHeaer } from '../../components/organisms/index';
import { DetailRestrauntCard } from '../../components/templates/index';
import { ListErrorMessageText } from '../../components/atoms/index';
import './Detail.css';

export function Detail() {
  return (
    <div className='detail'>
      <AppHeaer />
      <div className='detail-content'>
        {/* <DetailRestrauntCard /> */}
        <ListErrorMessageText />
      </div>
    </div>
  )
}