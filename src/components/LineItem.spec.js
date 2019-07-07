import React from 'react'
import { shallow } from 'enzyme'
import LineItem from './LineItem'
import Product from './Product'

const setup = product => {
  const actions = {
    onRemoveItemClicked: jest.fn()
  }

  const component = shallow(
    <LineItem
      product={product}
      {...actions}
    />
  )

  return {
    component: component,
    actions: actions,
    button: component.find('button'),
    product: component.find(Product)
  }
}

let productProps

describe('ProductItem component', () => {
  beforeEach(() => {
    productProps = {
      name: 'Product 1',
      price: 9.99,
      quantity: 6,
      lineTotal: '59.94'
    }
  })

  it('should render product', () => {
    const { product } = setup(productProps)
    expect(product.props()).toEqual(productProps)
  })

  it('should render Remove message', () => {
    const { button } = setup(productProps)
    expect(button.text()).toMatch(/^Remove/)
  })

  it('should call action on button click', () => {
    const { button, actions } = setup(productProps)
    button.simulate('click')
    expect(actions.onRemoveItemClicked).toBeCalled()
  })

})
