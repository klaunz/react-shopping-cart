import React from "react";
import PropTypes from "prop-types";
import "./ProductsList.css";

const ProductsList = ({ title, children }) => (
  <div>
    <h2 className="ProductsList__title">{title}</h2>
    <div className="ProductsList__products">{children}</div>
  </div>
);

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};

export default ProductsList;
