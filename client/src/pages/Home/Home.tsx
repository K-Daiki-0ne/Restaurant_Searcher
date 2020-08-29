import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userCurrentLocation } from '../../store/atoms/location';
import { getLocation } from '../../util/location';
import { HomeComponent } from '../../components/templates/index';
import { AppHeaer } from '../../components/organisms/AppHeader/AppHeader';
import { AppCircular } from '../../components/atoms/AppCircular/AppCircular';
import './Home.css';


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

  return loading ?(
    <div className='home'>
      <AppHeaer />
      <div className='image'>
        <HomeComponent />
      </div>
    </div>
  ) : (
    <div className='home'>
        <AppHeaer />
      <div className='spin'>
        <AppCircular />
      </div>
    </div>
  )
}