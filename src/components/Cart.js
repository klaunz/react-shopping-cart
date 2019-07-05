import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux";
import { removeLineItem } from "../actions"
import { getCartProducts } from "../reducers";
import Product from "./Product"
import "./Cart.css";

const Cart = ({ products, total, removeLineItem }) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map((product, index) => (
      <div className="Cart__item" key={index}>
        <Product
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          lineTotal={product.lineTotal}
          onRemoveItemClicked={() => {
            removeLineItem(index, product.id);
          }}
        />
      </div>
    ))
  ) : (
    <em>Please add some products to cart.</em>
  );

  return (
    <div className="Cart">
      <h3 className="Cart__title">My Bag</h3>
      <div className="Cart__nodes">{nodes}</div>
      <h3>Total: &#36;{total}</h3>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string
};

const mapStateToProps = state => ({
  products: getCartProducts(state)
});

export default connect(
  mapStateToProps,
  { removeLineItem }
)(Cart);
