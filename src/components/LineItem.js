import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import "./ProductItem.css";

const ProductItem = ({ product, onRemoveItemClicked }) => (
  <div className="ProductItem">
    <Product name={product.name} price={product.price} quantity={product.quantity} lineTotal={product.lineTotal} />
    <button onClick={onRemoveItemClicked} className="ProductItem__remove">
      Remove
    </button>
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    lineTotal: PropTypes.string.isRequired
  }).isRequired,
  onRemoveItemClicked: PropTypes.func.isRequired
};

export default ProductItem;
