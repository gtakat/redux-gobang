import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Game from '../Game'
import Gameinfo from '../../containers/Gameinfo'
import Goban from '../Goban'

describe('<Game>', () => {
  it('renders gameinfo and goban', () => {
    const wrapper = shallow(<Game />)
    expect(wrapper.containsAllMatchingElements([
      <Gameinfo />,
      <Goban />
    ])).to.equal(true)
  })
})