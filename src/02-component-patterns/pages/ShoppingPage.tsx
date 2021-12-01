import {
  ProductButton,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { products } from '../data/products';
import { useShoppingCard } from '../hooks/useShoppingCard';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCard();

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
            value={shoppingCart[product.id]?.count || 0}
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
              onChange={onProductCountChange}
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
