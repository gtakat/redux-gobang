import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Goishi from '../Goishi'

describe('<Goishi>', () => {
  it('render goishi black', () => {
    const wrapper = shallow(<Goishi color="black" />)
    expect(wrapper.contains(<div className="App-goishi-black" />)).to.equal(true)
  })

  it('render goishi white', () => {
    const wrapper = shallow(<Goishi color="white" />)
    expect(wrapper.contains(<div className="App-goishi-white" />)).to.equal(true)
  })

  it('render empty', () => {
    const wrapper = shallow(<Goishi />)
    expect(wrapper.content).to.be.empty
  })
})