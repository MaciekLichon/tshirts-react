import styles from './Product.module.scss';
import Button from '../Button/Button';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import PropTypes from 'prop-types';
import {useState, useMemo} from 'react';


const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]['name']);

  const getPrice = useMemo(() => {
    const toAdd = props.sizes.find(s => s.name === currentSize)['additionalPrice'];
    // console.log('memo ran');
    return props.basePrice + toAdd;
  }, [currentSize, props.sizes, props.basePrice]);

  const updateColor = e => {
    setCurrentColor(e.target.id);
  }

  const updateSize = e => {
    setCurrentSize(e.target.id);
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(
      ` Summary
      \n ==========
      \n Name: ${props.title}
      \n Price: ${getPrice()}
      \n Size: ${currentSize}
      \n Color: ${currentColor}`
    );
  }


  return (
    <article className={styles.product}>

      <ProductImage name={props.name} title={props.title} currentColor={currentColor}/>

      <div>

        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>

        <ProductForm action={handleFormSubmit}>
          <OptionColor colors={props.colors} updateColor={updateColor} currentColor={currentColor}/>
          <OptionSize sizes={props.sizes} updateSize={updateSize} currentSize={currentSize} />
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </ProductForm>

      </div>

    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
}

export default Product;
