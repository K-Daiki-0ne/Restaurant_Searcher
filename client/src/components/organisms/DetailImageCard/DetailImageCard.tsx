import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { detailCurrentRestaurantImage } from '../../../store/selectors/detailRestaurant';


export const DetailImageCard: React.FC = (): JSX.Element => {
  const [isImage, setImage] = useState<boolean>(false);
  const detailRestaurantImage = useRecoilValue(detailCurrentRestaurantImage);

  useEffect(() => {
    setImage(false);
    try {
      if(detailRestaurantImage.shop_image1) {
        setImage(true);
      } else {
        setImage(false);
      }
    } catch (err) {
      setImage(false);
    }
  }, [])

  return isImage ? (
    <div>
      <img src={detailRestaurantImage.shop_image1} className='restaurant-image' />
    </div>
  ) : (
    <div>
      <img src={require('./noimage.png')} className='restaurant-image' />
    </div>
  )
}