import React from 'react';
import { Link } from 'react-router-dom'
import './ListRestaurantCard.css';

export const ListRestaurantCard: React.FC = () => {
  return (
  <div className="grid">
    <Link to='/detail'>
      <article className="restraunt-image">
        <p>お店の画像</p>
      </article>
      <article className="restraunt-content">
        <section className='name'>
          <p>
            お店の名前
          </p>
        </section>
        <section className='adress'>
          <p>
            お店の住所
          </p>
        </section>
      </article>
    </Link>
  </div>
  )
}