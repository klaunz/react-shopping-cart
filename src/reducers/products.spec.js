import reducer, * as products from "./products";

describe("reducers", () => {
  describe("products", () => {
    let state;

    describe("when products are received", () => {
      beforeEach(() => {
        state = reducer(
          {},
          {
            type: "RECEIVE_PRODUCTS",
            products: [
              {
                name: "Product 1",
                price: 125.76
              },
              {
                name: "Product 2",
                price: 190.51
              }
            ]
          }
        );
      });

      it("contains the products from the action", () => {
        expect(products.getProduct(state, 0)).toEqual({
          name: "Product 1",
          price: 125.76
        });
        expect(products.getProduct(state, 1)).toEqual({
          name: "Product 2",
          price: 190.51
        });
      });

      it("contains no other products", () => {
        expect(products.getProduct(state, 3)).toEqual(undefined);
      });

      it("lists all of the products as visible", () => {
        expect(products.getVisibleProducts(state)).toEqual([
          {
            name: "Product 1",
            price: 125.76
          },
          {
            name: "Product 2",
            price: 190.51
          }
        ]);
      });

      describe("when an item is added to the cart", () => {
        beforeEach(() => {
          state = reducer(state, { type: "ADD_TO_CART", productId: 1 });
        });

        it("the inventory is reduced", () => {
          expect(products.getVisibleProducts(state)).toEqual([
            {
              name: "Product 1",
              price: 125.76
            },
            {
              name: "Product 2",
              price: 190.51
            }
          ]);
        });
      });
    });
  });
});
