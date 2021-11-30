import { useState } from 'react';
import {
  ProductButton,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

const product1 = {
  id: '1',
  title: 'Cofee Mug - Card',
  img: './coffee-mug.png',
};
const product2 = {
  id: '2',
  title: 'Cofee Mug - Meme',
  img: './coffee-mug2.png',
};
const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    console.log('onProductCountChange', count, product);

    setShoppingCart((oldChoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldChoppingCart;
        console.log('REMOVE', [toDelete, rest]);
        return rest;
      }
      return {
        ...oldChoppingCart,
        [product.id]: {
          ...product,
          count,
        },
      };
    });
  };

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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className='bg-dark text-white'
            onChange={onProductCountChange}
          >
            <ProductImage
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
              className='bg-dark text-bold'
            />
            <ProductTitle style={{ fontWeight: 'bold' }} />
            <ProductButton className='custom-buttons' />
          </ProductCard>
        ))}
      </div>
      <div className='shopping-card'>
        {Object.entries(shoppingCart).map(([key, productInCart]) => {
          return (
            <ProductCard
              key={key}
              product={productInCart}
              className='bg-dark text-white'
              style={{ width: '100px' }}
              value={productInCart.count}
            >
              <ProductImage
                style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
                className='bg-dark text-bold'
              />
              <ProductButton
                className='custom-buttons'
                style={{ display: 'flex', justifyContent: 'center' }}
              />
            </ProductCard>
          );
        })}
      </div>
      <div>
        <code>{JSON.stringify(Object.entries(shoppingCart), null, 5)}</code>
      </div>
    </div>
  );
};
