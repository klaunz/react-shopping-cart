import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import { getVisibleProducts } from "../reducers/products";
import ProductList from "../components/ProductList";
import ProductItem from "../components/ProductItem";

const ProductsContainer = ({ products, addToCart }) => (
  <ProductList title="Products">
    {products.map((product, index) => (
      <ProductItem
        key={index}
        product={product}
        onAddToCartClicked={() => {
          addToCart(index);
        }}
      />
    ))}
  </ProductList>
);

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
});

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer);
