import {
  ProductButton,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';
const product1 = {
  id: '',
  title: 'Cofee Mug - Card',
  img: './coffee-mug.png',
};
const product2 = {
  id: '',
  title: 'Cofee Mug - Meme',
  img: './coffee-mug2.png',
};
const products: Product[] = [product1, product2];
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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className='bg-dark text-white'
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
        <ProductCard
          key={product2.id}
          product={product2}
          className='bg-dark text-white'
          style={{ width: '100px' }}
        >
          <ProductImage
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            className='bg-dark text-bold'
          />
          <ProductButton className='custom-buttons' />
        </ProductCard>
        <ProductCard
          key={product1.id}
          product={product1}
          className='bg-dark text-white'
          style={{ width: '100px' }}
        >
          <ProductImage
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            className='bg-dark text-bold'
          />
          <ProductButton className='custom-buttons' />
        </ProductCard>
      </div>
    </div>
  );
};
