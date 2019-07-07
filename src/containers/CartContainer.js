import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeLineItem } from "../actions";
import { getTotal, getCartProducts } from "../reducers";
import LineItem from "../components/LineItem";
import Cart from "../components/Cart";

const CartContainer = ({ products, total, removeLineItem }) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map((product, index) => (
      <div className="Cart__item" key={index}>
        <LineItem
          product={product}
          onRemoveItemClicked={() => removeLineItem(index, product.id)}
        />
      </div>
    ))
  ) : (
    `Please add some products to cart.`
  );
  return (
    <Cart total={total}>
    {nodes}
    </Cart>
  );
};

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
  };
};

export default connect(
  mapStateToProps,
  { removeLineItem }
)(CartContainer);
