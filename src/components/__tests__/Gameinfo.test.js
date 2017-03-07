import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Gameinfo from '../Gameinfo'
import Goishi from '../Goishi'

describe('<Gameinfo> display winner', () => {
  it('win white', () => {
    const wrapper = shallow(<Gameinfo winner="white" />)
    const goishi = <Goishi color="white" />
    expect(wrapper.contains(goishi)).to.equal(true)
  })

  it('win black', () => {
    const wrapper = shallow(<Gameinfo winner="black" />)
    const goishi = <Goishi color="black" />
    expect(wrapper.contains(goishi)).to.equal(true)
  })

  it('next player white', () => {
    const wrapper = shallow(<Gameinfo current="white" />)
    const goishi = <Goishi color="white" />
    expect(wrapper.contains(goishi)).to.equal(true)
  })

  it('next player black', () => {
    const wrapper = shallow(<Gameinfo current="black" />)
    const goishi = <Goishi color="black" />
    expect(wrapper.contains(goishi)).to.equal(true)
  })
})