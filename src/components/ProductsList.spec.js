import React from 'react'
import { shallow } from 'enzyme'
import ProductsList from './ProductsList'

const setup = props => {
  const component = shallow(
    <ProductsList title={props.title}>{props.children}</ProductsList>
  )

  return {
    component: component,
    children: component.children().at(1),
    h2: component.find('h2')
  }
}

describe('ProductsList component', () => {
  it('should render title', () => {
    const { h2 } = setup({ title: 'Test Products' })
    expect(h2.text()).toMatch(/^Test Products$/)
  })

  it('should render children', () => {
    const { children } = setup({ title: 'Test Products', children: 'Test Children' })
    expect(children.text()).toMatch(/^Test Children$/)
  })
})
