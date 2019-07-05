import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTotal, getCartProducts } from "../reducers";
import Cart from "../components/Cart";

const CartContainer = ({ products, total }) => (
  <Cart
    products={products}
    total={total}
  />
);

//removeLineItem(index)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      lineTotal: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  total: PropTypes.string
};

const mapStateToProps = state => {
  return {
    products: getCartProducts(state),
    total: getTotal(state)
  }
};

export default connect(
  mapStateToProps
)(CartContainer);
