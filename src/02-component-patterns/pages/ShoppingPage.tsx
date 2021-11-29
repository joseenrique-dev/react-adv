import {
  ProductButton,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import '../styles/custom-styles.css';
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
        <ProductCard product={product} className='bg-dark'>
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title className='text-white text-bold' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        <ProductCard product={product} className='bg-dark'>
          <ProductImage
            className='custom-image'
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductTitle title={'Coffee'} className='text-white text-bold' />
          <ProductButton className='custom-buttons' />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: '#70D1F8' }}>
          <ProductImage
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductTitle style={{ fontWeight: 'bold' }} />
          <ProductButton
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
