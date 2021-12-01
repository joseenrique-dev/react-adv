import {
  ProductButton,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  const product = products[0];
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className='bg-dark text-white'
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {() => (
          <>
            <ProductImage
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
              className='bg-dark text-bold'
            />
            <ProductTitle style={{ fontWeight: 'bold' }} />
            <ProductButton className='custom-buttons' />
          </>
        )}
      </ProductCard>
    </div>
  );
};
