import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Masu from '../Masu'
import Goishi from '../Goishi'

describe('<Masu>', () => {
  let squares = null

  beforeEach(() => {
    squares = Array(19)
    for (let i=0; i<squares.length; i++) {
      squares[i] = Array(19).fill(null)
    }
  })

  it('render masu black', () => {
    squares[9][9] = 'black'
    const wrapper = shallow(<Masu squares={squares} row="9" col="9" />)
    expect(wrapper.contains(<Goishi color="black" />)).to.equal(true)
  })

  it('render masu white', () => {
    squares[9][9] = 'white'
    const wrapper = shallow(<Masu squares={squares} row="9" col="9" />)
    expect(wrapper.contains(<Goishi color="white" />)).to.equal(true)
  })

  it('render masu none', () => {
    const wrapper = shallow(<Masu squares={squares} row="9" col="9" />)
    expect(wrapper.find(<Goishi />).exists()).to.be.false
  })
})