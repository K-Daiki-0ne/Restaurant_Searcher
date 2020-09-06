import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ListImageCard.css';

type ImageType = {
  qrcode: string;
  shop_image1: string;
  shop_image2: string;
}

type RestaurantImageProps = {
  // images: ImageType;
  images: ImageType
}

export const ListImageCard: React.FC<RestaurantImageProps> = ({ images }) => {
  const [isImages, setIsImages] = useState<boolean>(true);

  useEffect(() => {
    if(images.shop_image1) {
      setIsImages(true);
    } else {
      setIsImages(false);
    }
  }, [images.shop_image1])

  return isImages ? (
    <div>
      <img src={images.shop_image1} className='restaurant-image' />
    </div>
  ) : (
    <div>
      <img src={require('./noimage.png')} className='restaurant-image' />
    </div>
  )
}