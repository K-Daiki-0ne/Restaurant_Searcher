import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import NoImage from '../../../../public/img/noimage.png';

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
  console.log(images.qrcode)

  useEffect(() => {
    if(images.shop_image1) {
      setIsImages(true);
    } else {
      setIsImages(false);
    }
  }, [])

  return isImages ? (
    <div>
      <Link to='/detail'>
        {/* <img src={images.shop_image1} /> */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQacc2oDFiw1I0NnyJPMld4e_AgK_npkQnzpw&usqp=CAU" className="card-img-top" alt="..." />
      </Link>
    </div>
  ) : (
    <div>
      <Link to='/detail'>
        <img src={require('./noimage.png')}/>
      </Link>
    </div>
  )
}