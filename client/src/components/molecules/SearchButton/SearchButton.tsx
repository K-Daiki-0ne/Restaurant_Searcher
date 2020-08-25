import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeaarchIcon } from '../../atoms/index';
import { getLocation } from '../../../util/location';
import './SearchButton.css'

type CurrentPosition = {
  lat: string;
  lon: string;
};

export function SearchButton() {
  const [location, setLocation] = useState<CurrentPosition>();

  useEffect(() => {
    getLocation()
      .then((data: object | any) => setLocation(data));
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