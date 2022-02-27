import PropTypes from 'prop-types';

const ProductForm = props => {
  return (
    <form onSubmit={props.action}>
      {props.children}
    </form>
  );
}

ProductForm.propTypes = {
  action: PropTypes.func.isRequired,
}

export default ProductForm;
