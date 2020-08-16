import React from 'react';
import { Link } from 'react-router-dom';
import './ListRestaurantCard.css';

export const ListRestaurantCard: React.FC = () => {
  return (
  <div className="grid">
    <article className="restraunt-image">
      {/* <ListTitleCard /> */}
      <p>sample</p>
    </article>
    <article className="restraunt-content">
      <section className='name'>
        <Link to='/detail'>
          <p>
            お店の名前
          </p>
        </Link>
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