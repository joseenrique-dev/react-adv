import { createContext, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { ProductContextProps, Product } from '../interfaces/interfaces';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButton } from './ProductButtons';

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButton;
