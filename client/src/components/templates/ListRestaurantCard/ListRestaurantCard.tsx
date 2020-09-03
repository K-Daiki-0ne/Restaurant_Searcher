import React from 'react';
import { 
  ListTitle,
  ListAdressCard,
  ListImageCard 
} from '../../organisms/index';
import './ListRestaurantCard.css';

type ListProps = {
  restaurant: any;
}

export const ListRestaurantCard: React.FC<ListProps> = ({ restaurant }) => {
  console.log(restaurant)
  return (
    <div className="card-section">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQacc2oDFiw1I0NnyJPMld4e_AgK_npkQnzpw&usqp=CAU" className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title">Dubai Tourist Guide</h4>
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
    )
}