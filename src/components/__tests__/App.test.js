import React from 'react'
import { shallow, } from 'enzyme'
import { expect } from 'chai'
import App from '../App'
import Header from '../Header'
import Footer from '../Footer'
import Game from '../Game'

it('renders without crashing', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.containsAllMatchingElements([
    <Header />,
    <Game />,
    <Footer />
  ])).to.equal(true)
})

