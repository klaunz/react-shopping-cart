import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import "./LineItem.css";

const LineItem = ({ product, onRemoveItemClicked }) => (
  <div className="LineItem">
    <div className="LineItem__product">
      <Product name={product.name} price={product.price} />
      {product.quantity ? (
        <p className="LineItem__qty">
          <strong>Quantity: {product.quantity}</strong>
        </p>
      ) : null}
      {product.lineTotal ? (
        <p className="LineItem__lineTotal">
          <strong>Total: &#36;{product.lineTotal}</strong>
        </p>
      ) : null}
    </div>
    <div>
      <button onClick={onRemoveItemClicked} className="LineItem__remove">
        Remove
      </button>
    </div>
  </div>
);

LineItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
    lineTotal: PropTypes.string
  }).isRequired,
  onRemoveItemClicked: PropTypes.func.isRequired
};

export default LineItem;
