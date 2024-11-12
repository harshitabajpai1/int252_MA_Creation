import React from 'react';

function Cart() {
  // Dummy cart data
  const cartItems = [
    { id: 1, name: 'Product 1', price: '$20', quantity: 2 },
    { id: 2, name: 'Product 2', price: '$30', quantity: 1 },
  ];

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.name} - {item.price} x {item.quantity}</p>
        </div>
      ))}
      <button>Checkout</button>
    </div>
  );
}

export default Cart;
