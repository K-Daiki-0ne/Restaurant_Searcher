import React, { useState, useEffect } from 'react';

type DetailRestaurantImage = {
  qrcode: string;
  shop_image1: string;
  shop_image2: string;
}

type DetailRestaurantImageProps = {
  images: DetailRestaurantImage
}

export const DetailImageCard: React.FC<DetailRestaurantImageProps> = ({ images }): JSX.Element => {
  const [isImage, setImage] = useState<boolean>(false);

  useEffect(() => {
    if(images.shop_image1) {
      setImage(true);
    } else {
      setImage(false);
    }
  }, [images.shop_image1])

  return isImage ? (
    <div>
      <img src={images.shop_image1} className='restaurant-image' />
    </div>
  ) : (
    <div>
      <img src={require('./noimage.png')} className='restaurant-image' />
    </div>
  )
}