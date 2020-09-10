import React, { useEffect } from 'react';
import { AppHeaer } from '../../components/organisms/index';
import { DetailRestrauntCard } from '../../components/templates/index';
import { useQuery } from '../../hook/useQuery';
import { userCurrentDetailRestaurant } from '../../store/atoms/detailRestaurant';
import { useRecoilState } from 'recoil';
import { detailRestRequest } from '../../api/detailRestRequest';
import './Detail.css';

export function Detail() {
  const [,setDetailRestaurant] = useRecoilState(userCurrentDetailRestaurant);
  const query = useQuery();

  const id: string | null = query.get("id");

  useEffect(() => {
    detailRestaurantRequest()
      .then((result: any) => setDetailRestaurant(result))
  }, [])

  const detailRestaurantRequest = async () => {
    const result: any = await detailRestRequest(id);
    console.log(JSON.stringify(result))
    var rv: any = {};
    for (var i = 0; i < result.length; ++i)
    rv[i] = result[i];
    console.log(rv[0])
    return result
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