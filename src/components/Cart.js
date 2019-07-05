import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import "./Cart.css";

const Cart = ({ products, total }) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map((product, index) => (
      <Product
        name={product.name}
        price={product.price}
        quantity={product.quantity}
        lineTotal={product.lineTotal}
        key={index}
      />
    ))
  ) : (
    <em>Please add some products to cart.</em>
  );

  return (
    <div className="Cart">
      <h3>My Bag</h3>
      <div className="Cart__nodes">{nodes}</div>
      <h3>Total: &#36;{total}</h3>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string
};

export default Cart;
