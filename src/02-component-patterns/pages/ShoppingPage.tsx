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
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product} className='bg-dark'>
          <ProductImage className='custom-image' />
          <ProductTitle title={'Coffee'} className='text-white text-bold' />
          <ProductButton className='custom-buttons' />
        </ProductCard>
      </div>
    </div>
  );
};
