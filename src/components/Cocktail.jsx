import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context';
export default function Cocktail({ image, name, id, info, glass,price }) {
  const { addToCart } = useGlobalContext();

  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
        <button className='btn btn-primary' onClick={() => addToCart({ id, name, price })}>
          Add to Cart
        </button>
      </div>
    </article>
  )
}
