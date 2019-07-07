import React from "react";
import PropTypes from "prop-types";
import "./Product.css";

const Product = ({ price, quantity, name, lineTotal, onRemoveItemClicked }) => (
  <div className="Product">
    <h3 className="Product__name">{name}</h3>
    <h4 className="Product__price">
      &#36;{price.toFixed(2)}
      {quantity ? ` x ${quantity}` : null}
    </h4>
    {lineTotal ? (
      <p className="Product__lineTotal">
        <strong>Total: &#36;{lineTotal}</strong>
      </p>
    ) : null}
    {quantity ? (
      <button onClick={onRemoveItemClicked} className="ProductItem__remove">
        Remove
      </button>
    ) : null}
  </div>
);

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  lineTotal: PropTypes.string,
  name: PropTypes.string,
  onRemoveItemClicked: PropTypes.func
};

export default Product;
