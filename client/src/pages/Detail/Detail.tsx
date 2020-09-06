import React from 'react';
import { AppHeaer } from '../../components/organisms/index';
import { DetailRestrauntCard } from '../../components/templates/index';
import { useQuery } from '../../hook/useQuery';
import './Detail.css';

export function Detail() {
  const query = useQuery();

  console.log(query.get("id"));

  return (
    <div className='detail'>
      <AppHeaer />
      <div className='detail-content'>
        <DetailRestrauntCard />
      </div>
    </div>
  )
}