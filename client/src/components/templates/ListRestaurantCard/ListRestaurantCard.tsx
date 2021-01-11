import React from 'react';
import { 
  ListTitle,
  ListAdressCard,
  ListImageCard 
} from '../../organisms/index';
// import { userCurrentRestaurants } from '../../../store/atoms/restraunt';
import { Link } from 'react-router-dom';
import './ListRestaurantCard.css';

type ListProps = {
  restaurant: any;
}

export const ListRestaurantCard: React.FC<ListProps> = ({ restaurant }) => {
  return (
    <div className='list-restaurant-card'>
      <Link to={`/detail?id=${restaurant.id}`} className='link'>
        <div className="card-section">
          <div className="card-body">
            <div className='card-img-top'>
              <ListImageCard images={restaurant.image_url} />
            </div>
            <div className="card-title">
              <ListTitle name={restaurant.name} />
            </div>
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