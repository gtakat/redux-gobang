import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Goban from '../Goban'

describe('<Goban>', () => {
  it('renders goban', () => {
    let squares = Array(19)
    for (let i=0; i<squares.length; i++) {
      squares[i] = Array(19).fill(null)
    }
    const wrapper = shallow(<Goban squares={squares} />)
    expect(wrapper.find(Masu)).to.have.length(19*19)
  })
})