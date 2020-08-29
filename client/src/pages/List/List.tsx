import React, { useState, useEffect } from 'react';
import { AppHeaer } from '../../components/organisms/index';
import { ListRestaurantCard } from '../../components/templates/index';
import { AppCircular } from '../../components/atoms/index'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { apiRequest } from '../../api/apiRequest';
import { userCurrentLocation } from '../../store/atoms/location';
import { userCurrentRestaurants } from '../../store/atoms/restraunt';
import './List.css';

export function List() {
  const [loading, setLoading] = useState(false);
  const location = useRecoilValue(userCurrentLocation);
  const setResturants = useSetRecoilState(userCurrentRestaurants);

  useEffect(() => {
    setLoading(false);
    apiResult()
      .then((result: any) => setResturants(result))
      .then(() => setLoading(true))
  }, []);
  
  const apiResult = async () => {
    const result = await apiRequest(location.lat, location.lon);
    return result;
  }

  return loading ? (
    <div className='list'>
      <AppHeaer />
      <div className='list-content'>
        <ListRestaurantCard />
      </div>
    </div>
  ) : (
    <div className='list'>
        <AppHeaer />
      <div className='spin'>
        <AppCircular />
      </div>
    </div>
  )
}