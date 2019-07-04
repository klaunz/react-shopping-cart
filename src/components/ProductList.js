import React from 'react'
import PropTypes from 'prop-types'
import './ProductList.css'

const ProductList = ({ title, children }) => (
  <div>
    <h2 className="ProductList__title">{title}</h2>
    <div className="ProductList__products">{children}</div>
  </div>
)

ProductList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductList