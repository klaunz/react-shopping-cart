import React from "react";
import { shallow } from "enzyme";
import LineItem from "./LineItem";
import Product from "./Product";

const setup = product => {
  const actions = {
    onRemoveItemClicked: jest.fn()
  };

  const component = shallow(<LineItem product={product} {...actions} />);

  return {
    component: component,
    actions: actions,
    quantity: component.find(".LineItem__qty"),
    total: component.find(".LineItem__lineTotal"),
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
    expect(product.props()).toEqual(productProps);
  });

  it("should render quantity", () => {
    const { quantity } = setup({
      name: "Test Product",
      price: 9.99,
      quantity: 1,
      lineTotal: "9.99"
    });
    expect(quantity.text()).toMatch(/^Quantity: 1/);
  });

  it("should render total", () => {
    const { total } = setup({
      name: "Test Product",
      price: 9.99,
      quantity: 1,
      lineTotal: "9.99"
    });
    expect(total.text()).toBe("Total: $9.99");
  });

  it("should render Remove message", () => {
    const { button } = setup(productProps);
    expect(button.text()).toMatch(/^Remove/);
  });

  it("should call action on button click", () => {
    const { button, actions } = setup(productProps);
    button.simulate("click");
    expect(actions.onRemoveItemClicked).toBeCalled();
  });
});
