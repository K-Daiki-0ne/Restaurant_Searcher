import React from 'react';
import { 
  ListTitle,
  ListAdressCard,
  ListImageCard 
} from '../../organisms/index';
import { Link } from 'react-router-dom';
import './ListRestaurantCard.css';

type ListProps = {
  restaurant: any;
}

export const ListRestaurantCard: React.FC<ListProps> = ({ restaurant }) => {
  const image = {
    qrcode: 'sample',
    shop_image1: 'http://res.cloudinary.com/jenelle-miller/image/upload/v1518632582/tupelo-cafe_a7buc9.png',
    shop_image2: 'shop_image2'
  };
  return (
    <div className='featured-listings'>
      <Link to={`/detail?id=${restaurant.id}`} className='link'>
      <div className='restaurant-card'>
        <div className='card-header'>
          <ListImageCard images={image} />
          <button className='favorite-btn'>
            <i className='fas fa-heart'></i>
          </button>
        </div>
        <div className='card-body'>
          <ListTitle name={restaurant.name} />
          <div className="border-line"></div>
          <p className="card-text">
            {restaurant.address}
            {restaurant.opentime}
          </p>
        </div>
      </div>
      </Link>
    </div>
    )
}