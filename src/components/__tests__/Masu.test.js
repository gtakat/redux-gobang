import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Masu from '../Masu'
import Goishi from '../Goishi'

describe('<Masu>', () => {
  it('render masu black', () => {
    const wrapper = shallow(<Masu color="black" />)
    expect(wrapper.contains(<Goishi color="black" />)).to.equal(true)
  })

  it('render masu white', () => {
    const wrapper = shallow(<Masu color="white" />)
    expect(wrapper.contains(<Goishi color="white" />)).to.equal(true)
  })

  it('render masu none', () => {
    const wrapper = shallow(<Masu />)
    expect(wrapper.find('.App-goishi-black').exists()).to.be.false
    expect(wrapper.find('.App-goishi-white').exists()).to.be.false
  })
})