import React, { useState, useEffect } from 'react';
import { AppHeaer } from '../../components/organisms/index';
import { ListRestaurantCard } from '../../components/templates/index';
import { userCurrentLocation } from '../../store/atoms/location';
import { useRecoilValue, useRecoilState } from 'recoil';
import { apiRequest } from '../../api/apiRequest';
import { userCurrentRestaurants } from '../../store/atoms/restraunt';
import './List.css';

export function List() {
  // const [restraunt, setRestraunts] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useRecoilValue(userCurrentLocation);
  const [restaurants, setResturants] = useRecoilState(userCurrentRestaurants);

  useEffect(() => {
    apiResult()
  }, []);

  const apiResult = async () => {
    setLoading(false);
    const result = await apiRequest(location.lat, location.lon);
    setResturants(result);
    setLoading(true);
  }

  return (
    <div className='list'>
      <AppHeaer />
      <div className='list-content'>
        <ListRestaurantCard />
      </div>
    </div>
  )
}