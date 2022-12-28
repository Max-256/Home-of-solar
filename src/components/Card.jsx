import React from 'react';
import { Link } from 'react-router-dom';

function Card({pdt, onAdd}) {
    return (
        <div className='pdt-div'>                            
            <div className='image-div'>
              <Link to={`/product/${pdt.id}`}>
              <img className='pdt-image' src={pdt.image} alt={pdt.title}/>
              </Link>
            </div>
            <div>
              <p className='pdt-title'>{pdt.title}</p>
              <p className='badge badge-primary pdt-price'>$ {pdt.price}</p>
              <button className='btn-basket' onClick={() => onAdd(pdt)}>
              Add to basket
              </button>
            </div>
        </div>
    );
}

export default Card;