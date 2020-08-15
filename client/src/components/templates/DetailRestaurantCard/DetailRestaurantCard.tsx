import React from 'react';
import './DetailRestaurantCard.css';

export const DetailRestrauntCard: React.FC = () => {
  return (
  <div className="grid">
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
  </div>
  )
}