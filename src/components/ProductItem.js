import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import "./ProductItem.css";

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="ProductItem">
    <Product name={product.name} price={product.price} />
    <button onClick={onAddToCartClicked} className="ProductItem__button">
      Add to cart
    </button>
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
};

export default ProductItem;
