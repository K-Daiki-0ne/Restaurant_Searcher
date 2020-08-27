import React, { useState, useEffect } from 'react';
import { AppHeaer } from '../../components/organisms/index';
import { ListRestaurantCard } from '../../components/templates/index';
import { userCurrentLocation } from '../../store/atoms/location';
import { useRecoilValue } from 'recoil';
import { apiRequest } from '../../api/apiRequest';
import './List.css';

export function List() {
  const [restraunt, setRestraunts] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useRecoilValue(userCurrentLocation);

  useEffect(() => {
    apiResult();
  }, []);

  const apiResult = async() => {
    const result = await apiRequest(location.lat, location.lon);
    console.log(result);
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