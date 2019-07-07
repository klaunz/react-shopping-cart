import React from "react";
import { shallow } from "enzyme";
import Product from "./Product";
import ProductItem from "./ProductItem";

const setup = product => {
  const actions = {
    onAddToCartClicked: jest.fn()
  };

  const component = shallow(<ProductItem product={product} {...actions} />);

  return {
    component: component,
    actions: actions,
    button: component.find("button"),
    product: component.find(Product)
  };
};

let productProps;

describe("ProductItem component", () => {
  beforeEach(() => {
    productProps = {
      name: "Product 1",
      price: 9.99
    };
  });

  it("should render product", () => {
    const { product } = setup(productProps);
    expect(product.props()).toEqual({ name: "Product 1", price: 9.99 });
  });

  it("should render Add To Cart message", () => {
    const { button } = setup(productProps);
    expect(button.text()).toMatch(/^Add to cart/);
  });

  it("should call action on button click", () => {
    const { button, actions } = setup(productProps);
    button.simulate("click");
    expect(actions.onAddToCartClicked).toBeCalled();
  });
});
