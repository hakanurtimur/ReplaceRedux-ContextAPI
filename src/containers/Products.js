import React, { useContext } from 'react';
// import { useSelector } from 'react-redux';

import ProductItem from '../components/Products/ProductItem';
import { ProductContext } from '../ctx/product-context';
import './Products.css';

const Products = props => {
  const ctx = useContext(ProductContext)
  // const productList = useSelector(state => state.shop.products);
  return (
    <ul className="products-list">
      {ctx.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
