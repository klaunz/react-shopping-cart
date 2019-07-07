import React from "react";
import { shallow } from "enzyme";
import Cart from "./Cart";
import Product from "./Product";

const setup = (total, nodes = []) => {
  const actions = {
    onRemoveItemClicked: jest.fn()
  };

  const component = shallow(<Cart total={total}>{nodes}</Cart>);

  return {
    component: component,
    h3: component.find("h3"),
    children: component.children().at(1),
    products: component.find(Product),
    nodes: component.find(".Cart__nodes"),
    p: component.find("p")
  };
};

describe("Cart component", () => {
  it("should display total", () => {
    const { p } = setup("76");
    expect(p.text()).toMatch(/^Total: \$76/);
  });

  it("should display add some products message", () => {
    const { children } = setup("0", "Please add some products to cart");
    expect(children.text()).toMatch(/^Please add some products to cart/);
  });

  describe("when given product", () => {
    const product = [
      {
        id: 2,
        name: "Bandsaw",
        price: 562.14,
        quantity: 2,
        lineTotal: "1124.28"
      }
    ];

    const nodes = (
      <div className="Cart__item" key="1">
        <Product
          name={product[0].name}
          price={product[0].price}
          quantity={product[0].quantity}
          lineTotal={product[0].lineTotal}
        />
      </div>
    );

    it("should render product", () => {
      const { products } = setup("562.14", nodes);
      const props = {
        name: product[0].name,
        price: product[0].price,
        quantity: product[0].quantity,
        lineTotal: product[0].lineTotal
      };
      expect(products.at(0).props()).toEqual(props);
    });
  });
});
