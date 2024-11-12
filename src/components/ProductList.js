import React from 'react';
import ProductItem from './ProductItem';

const products = [
  { id: 1, name: 'Product 1', price: '$20', image: 'path-to-image' },
  { id: 2, name: 'Product 2', price: '$30', image: 'path-to-image' },
  // Add more products
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
