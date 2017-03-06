import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Footer from '../Footer'

describe('<Footer>', () => {
  it('render footer', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.is('.App-footer')).to.equal(true)
  })
})