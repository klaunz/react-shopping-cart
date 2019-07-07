import React from "react";
import PropTypes from "prop-types";
import "./Cart.css";

const Cart = ({ total, children }) => {
  return (
    <div className="Cart">
      <h3 className="Cart__title">My Bag</h3>
      <div className="Cart__nodes">{children}</div>
      <p>Total: &#36;{total}</p>
    </div>
  );
};

Cart.propTypes = {
  total: PropTypes.string,
  children: PropTypes.node
};

export default Cart;
