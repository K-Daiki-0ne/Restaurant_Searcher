import React from 'react';
import { Link } from 'react-router-dom';
import { ListTitle } from '../../organisms/index';
import './ListRestaurantCard.css';

export const ListRestaurantCard: React.FC = () => {
  return (
  <div className="grid">
    <article className="restraunt-image">
      <p>sample</p>
    </article>
    <article className="restraunt-content">
      <section className='name'>
        <ListTitle />
      </section>
      <section className='adress'>
        <Link to='/detail'>
          <p>
            お店の住所
          </p>
        </Link>
      </section>
    </article>
  </div>
  )
}