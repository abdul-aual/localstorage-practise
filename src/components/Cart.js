import React, { useState } from 'react';
import './cart.css';

const Cart = () => {
    const [quantity, setQuantity] = useState(0);
    const [clicked, setClicked] = useState(false);
  
    const handleAddToBag = () => {
      setQuantity(1);
      setClicked(true);
    };
  
    const increaseQuantity = () => {
      setQuantity(quantity + 1);
    };
  
    const decreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      } else {
        setQuantity(0);
        setClicked(false);
      }
    };
  
    return (
      <div className="cart-app">
        <button
          className={`add-to-bag-btn ${clicked ? 'clicked' : ''}`}
          onClick={clicked ? null : handleAddToBag}
        >
          {clicked ? (
            <>
              <span className="decrease-btn" onClick={decreaseQuantity}>-</span>
              <span className="qty-btn">{quantity}</span>
              <span className="increase-btn" onClick={increaseQuantity}>+</span>
            </>
          ) : (
            'Add to Bag'
          )}
        </button>
      </div>
    );
  };
    
export default Cart;