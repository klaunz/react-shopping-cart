import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTotal, getCartProducts } from "../reducers";
import Cart from "../components/Cart";

const CartContainer = ({ products, total, checkout }) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)}
  />
);

CartContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      lineTotal: PropTypes.string.isRequired
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
