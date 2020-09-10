import React, { useEffect } from 'react';
import { AppHeaer } from '../../components/organisms/index';
import { DetailRestrauntCard } from '../../components/templates/index';
import { useQuery } from '../../hook/useQuery';
import { userCurrentDetailRestaurant } from '../../store/atoms/detailRestaurant';
import { useRecoilState } from 'recoil';
import { detailRestRequest } from '../../api/detailRestRequest';
import { parseArray } from '../../lib/parse';
import './Detail.css';

export function Detail() {
  const [,setDetailRestaurant] = useRecoilState(userCurrentDetailRestaurant);
  const query = useQuery();

  const id: string | null = query.get("id");

  useEffect(() => {
    const response = detailRestaurantRequest();
    response.then((data: any) => setDetailRestaurant(data));
  }, [])

  const detailRestaurantRequest = async () => {
    const result: any = await detailRestRequest(id);
    const data: any = parseArray(result);
    return data
  }

  return (
    <div className='detail'>
      <AppHeaer />
      <div className='detail-content'>
        <DetailRestrauntCard />
      </div>
    </div>
  )
}