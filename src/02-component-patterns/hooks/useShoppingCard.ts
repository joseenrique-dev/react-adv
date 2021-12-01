import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCard = () => {
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
    // console.log('onProductCountChange', count, product);

    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        console.log('REMOVE', [toDelete, rest]);
        return rest;
      }
      return {
        ...oldShoppingCart,
        [product.id]: {
          ...product,
          count,
        },
      };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
