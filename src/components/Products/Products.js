import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  return (
    <section>
      {productsData.map(productData => <Product key={productData.id} {...productData}/>)}
    </section>
  );
};

export default Products;
