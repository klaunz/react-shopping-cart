import React from "react";
import PropTypes from "prop-types";
import "./Product.css";

const Product = ({ price, quantity, name, lineTotal, onRemoveItemClicked }) => (
  <div className="Product">
    <h3 className="Product__name">{name} </h3>
    <h4 className="Product__price">&#36;{price.toFixed(2)}</h4>
  </div>
);

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  lineTotal: PropTypes.string,
  name: PropTypes.string
};

export default Product;
