import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userCurrentLocation } from '../../store/atoms/location';
import { getLocation } from '../../util/location';
import './Home.css';
import { HomeComponent } from '../../components/templates/index';
import { AppHeaer } from '../../components/organisms/AppHeader/AppHeader';


export function Home() {
  const [, setUserCurrentLocation] = useRecoilState(userCurrentLocation);

  useEffect(() => {
    getLocation()
      .then((data: object | any) => setUserCurrentLocation(data));
  }, [setUserCurrentLocation]);
  return (
    <div className='home'>
      <AppHeaer />
      <div className='image'>
        <HomeComponent />
      </div>
    </div>
  )
}