import React from 'react'
import PropTypes from 'prop-types'
import './Product.css'

const Product = ({ price, quantity, name }) => (
  <div className="Product">
    <h3 className="Product__name">{name}</h3>
    <h4 className="Product__price">&#36;{price}{quantity ? ` x ${quantity}` : null}</h4>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  name: PropTypes.string
}

export default Product
