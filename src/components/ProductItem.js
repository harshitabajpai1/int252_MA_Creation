import React from 'react';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
