import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import './Cart.css'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map((product, index) =>
      <Product
        name={product.name}
        price={product.price}
        quantity={product.quantity}
        key={index}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div className="Cart">
      <h3>Your Cart</h3>
      <div className="Cart__nodes">{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button className="Cart__button" onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
