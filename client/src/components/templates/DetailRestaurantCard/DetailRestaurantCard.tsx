import React from 'react';
import './DetailRestaurantCard.css';

export const DetailRestrauntCard: React.FC = () => {
  return (
  <div className="grid">
    <article className="restraunt-image">
      <p>sample</p>
    </article>
    <article className="restraunt-content">
      <section className='name'>
        <p>
          sample
        </p>
      </section>
      <section className='adress'>
        <p>
          sample02
        </p>
      </section>
    </article>
  </div>
  )
}