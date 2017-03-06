import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Header from '../Header'

describe('<Header>', () => {
  it('render header', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.is('.App-header')).to.equal(true)
  })
})