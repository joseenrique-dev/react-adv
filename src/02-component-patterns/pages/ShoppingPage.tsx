import React from 'react';
import {
  ProductButton,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';

const product = {
  id: '',
  title: 'Cofee Mug - Card',
  img: './coffee-mug.png',
};
export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {/* <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard> */}

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={'Coffee'} />
          <ProductButton />
        </ProductCard>
      </div>
    </div>
  );
};
