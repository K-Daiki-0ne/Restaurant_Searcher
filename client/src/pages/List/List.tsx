import React, { useState, useEffect } from 'react';
import { AppHeaer } from '../../components/organisms/index';
import { ListRestaurantCard } from '../../components/templates/index';
import { AppCircular } from '../../components/atoms/index'
import { useRecoilValue, useRecoilState } from 'recoil';
import { apiRequest } from '../../api/apiRequest';
import { userCurrentLocation } from '../../store/atoms/location';
import { userCurrentRestaurants } from '../../store/atoms/restraunt';
import './List.css';

export function List() {
  const [loading, setLoading] = useState(false);
  const location = useRecoilValue(userCurrentLocation);
  const [restaurants, setResturants] = useRecoilState(userCurrentRestaurants);

  useEffect(() => {
    setLoading(false);
    try {
      apiResult()
      .then((result: any) => setResturants(result))
      .then(() => setLoading(true)) 
    } catch (error) {
      setLoading(false)
    }
  }, [setLoading, setResturants]);
  
  const apiResult = async () => {
    const result = await apiRequest(location.lat, location.lon);
    return result;
  }


  return loading ? (
    <div >
      <AppHeaer />
    <div className='list'>
      <div className='list-content'>
        {
          restaurants.map((restaurant: any, index: number) => {
            return (
              <li className='li-content'>
                <ListRestaurantCard restaurant={restaurant} />
              </li>
            )
          })
        }
      </div>
    </div>
    </div>
  ) : (
    <div className='list'>
        <AppHeaer />
      <div className='list-spin'>
        <AppCircular />
      </div>
    </div>
  )
}