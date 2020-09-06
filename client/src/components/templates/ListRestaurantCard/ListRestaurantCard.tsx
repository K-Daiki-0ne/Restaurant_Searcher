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
    <Link to={`/detail?id=${restaurant.id}`}>
      <div className="card-section">
        <div className='card-img-top'>
          <ListImageCard images={restaurant.image_url} />
        </div>
        <div className="card-body">
          <div className="card-title">
            <ListTitle name={restaurant.name} />
          </div>
          <div className="border-line"></div>
          <p className="card-text">
            Card using html/css with clip path effets.
            lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia dolorem ipsa voluptas, iste illo atque repellat! Expedita dolor laboriosam officiis.
            amet consectetur adipisicing elit. Quia dolorem ipsa voluptas, iste illo atque repellat! Expedita dolor laboriosam officiis.
            ipsa voluptas, iste illo atque repellat! Expedita dolor laboriosam officiis.
            amet consectetur adipisicing elit. Quia dolorem ipsa voluptas, iste illo atque repellat! Expedita dolor laboriosam officiis.
          </p>
        </div>
      </div>
    </Link>
    )
}