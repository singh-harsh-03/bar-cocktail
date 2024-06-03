import React from 'react';
import { useGlobalContext } from '../context';

export default function Cart() {
  const { cart, removeFromCart } = useGlobalContext();

  if (cart.length === 0) {
    return <h2 className='section-title'>Your cart is empty</h2>;
  }

  return (
    <section className='section'>
      <h2 className='section-title'>Your Cart</h2>
      <div className='cart-center'>
        {cart.map((item) => (
          <article key={item.id} className='cart-item'>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button className='btn btn-primary' onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
