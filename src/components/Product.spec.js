import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'

const setup = props => {
  const actions = {
    onRemoveItemClicked: jest.fn()
  }

  const component = shallow(
    <Product
      {...props}
      {...actions}
    />
  )

  return {
    component: component,
    button: component.find('button')
  }
}

describe('Product component', () => {

  it('should render title and price', () => {
    const { component } = setup({ name: 'Test Product', price: 9.99 })
    expect(component.text()).toBe('Test Product $9.99')
  })

  describe('when given quantity', () => {
    it('should render title, price, total price and quantity', () => {
      const { component } = setup({ name: 'Test Product', price: 9.99, lineTotal: '59.94', quantity: 6 })
      expect(component.text()).toBe('Test Product $9.99 x 6Total: $59.94')
    })
  })
})
