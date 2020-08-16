import React from 'react';
import { 
  ListTitle,
  ListAdressCard,
  ListImageCard 
} from '../../organisms/index';
import './ListRestaurantCard.css';

export const ListRestaurantCard: React.FC = () => {
  return (
  <div className="grid">
    <article className="restraunt-image">
      <ListImageCard />
    </article>
    <article className="restraunt-content">
      <section className='name'>
        <ListTitle />
      </section>
      <section className='adress'>
        <ListAdressCard />
      </section>
    </article>
  </div>
  )
}