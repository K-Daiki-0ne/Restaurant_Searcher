import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userCurrentLocation } from '../../store/atoms/location';
import { getLocation } from '../../util/location';
import './Home.css';
import { HomeComponent } from '../../components/templates/index';
import { AppHeaer } from '../../components/organisms/AppHeader/AppHeader';


export function Home() {
  const [location, setLocation] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [, setUserCurrentLocation] = useRecoilState(userCurrentLocation);

  useEffect(() => {
    setTimeout(() => {
      // 三秒後に画面を表示する。
      setLoading(false);
      getLocation()
        .then((data: any) => setUserCurrentLocation(data))
        .catch((err: any) => setError(true))
      setLoading(true)
    }, 3000);
  }, [location]);

  return (
    <div className='home'>
      <AppHeaer />
      <div className='image'>
        <HomeComponent />
      </div>
    </div>
  )
}