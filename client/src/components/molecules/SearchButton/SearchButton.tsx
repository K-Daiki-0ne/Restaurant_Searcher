import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userCurrentLocation } from '../../../store/atoms/location';
import { SeaarchIcon } from '../../atoms/index';
import { getLocation } from '../../../util/location';
import './SearchButton.css'


export function SearchButton() {
  const setUserCurrentLocation = useSetRecoilState(userCurrentLocation);

  useEffect(() => {
    getLocation()
      .then((data: object | any) => setUserCurrentLocation(data));
  }, []);



  return (
    <div className='search'>
      <Link to={`/list`} className='link'>
        <button className='search-button' >
          <SeaarchIcon />
        </button>
      </Link>
    </div>
  )
}