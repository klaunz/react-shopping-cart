import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import "./LineItem.css";

const LineItem = ({ product, onRemoveItemClicked }) => (
  <div className="LineItem">
    <div className="LineItem__product">
      <Product name={product.name} price={product.price} quantity={product.quantity} lineTotal={product.lineTotal} />
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
    lineTotal: PropTypes.string.isRequired
  }).isRequired,
  onRemoveItemClicked: PropTypes.func.isRequired
};

export default LineItem;
