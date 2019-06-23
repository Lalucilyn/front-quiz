import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Thumb from '../../../Thumb';
import { formatPrice } from '../../../../services/util';
import { addProduct } from '../../../../services/cart/actions';

class Product extends Component {
static propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

state = {
  hovered: false
}

toggleHoverState = () => {
  this.setState({hovered: !this.state.hovered})
} 

render() {
  let product = this.props.product
  let addProduct = this.props.addProduct 
  let number = this.state.hovered ? 2 : 1
  
  product.quantity = 1;

  let formattedPrice = formatPrice(product.price, product.currencyId);
  let productInstallment;

  if (!!product.installments) {
    const installmentPrice = product.price / product.installments;
    productInstallment = (
      <div className="installment">
        <span>o {product.installments} cuotas de </span>
        <b>
          {product.currencyFormat}
          {formatPrice(installmentPrice, product.currencyId)}
        </b>
      </div>
    );
  }

  return (
    <div
      className="shelf-item"
      onClick={() => addProduct(product)}
      data-sku={product.sku}
    >
      {product.isFreeShipping && (
        <div className="shelf-stopper">Envío gratis</div>
      )}
      <Thumb
        classes="shelf-item__thumb"
        src={require(`../../../../static/products/${product.sku}_${number}.jpg`)}
        alt={product.title}
        hoverFunction={this.toggleHoverState}
      />
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>{product.currencyFormat}</small>
          <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
        </div>
        {productInstallment}
      </div>
      <div className="shelf-item__buy-btn">Añadir al carrito</div>
    </div>
  );
};
}

export default connect(
  null,
  { addProduct }
)(Product);
