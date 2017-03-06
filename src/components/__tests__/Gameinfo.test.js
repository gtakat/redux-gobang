import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Gameinfo from '../Gameinfo'

describe('<Gameinfo> display winner', () => {
  it('win white', () => {
    const wrapper = shallow(<Gameinfo winner="white" />)
    const goishi = <div className="App-goishi-white" />
    expect(wrapper.contains(goishi)).to.equal(true)
  })

  it('win black', () => {
    const wrapper = shallow(<Gameinfo winner="black" />)
    const goishi = <div className="App-goishi-black" />
    expect(wrapper.contains(goishi)).to.equal(true)
  })
})