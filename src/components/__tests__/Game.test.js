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

  // describe('hit goishi', () => {
  //
  //   let squares
  //   let wrapper
  //
  //   beforeAll(() => {
  //     squares = new Array(19)
  //     for (let i=0; i<squares.length; i++) {
  //       squares[i] = (new Array(19)).fill(null)
  //     }
  //
  //     wrapper = mount(<Game />)
  //
  //     wrapper.find('#App-masu-9-9').simulate('click')  // black
  //     wrapper.find('#App-masu-9-10').simulate('click') // white
  //     wrapper.find('#App-masu-8-9').simulate('click')  // black
  //     wrapper.find('#App-masu-9-11').simulate('click') // white
  //     wrapper.find('#App-masu-7-9').simulate('click')  // black
  //     wrapper.find('#App-masu-11-2').simulate('click') // white
  //     wrapper.find('#App-masu-6-9').simulate('click')  // black
  //     wrapper.find('#App-masu-13-2').simulate('click') // white
  //   })
  //
  //   it('click masu already exist (don\'t click)', () => {
  //     wrapper.find('#App-masu-6-9').simulate('click')  // black (don't click)
  //     expect(wrapper.find(Goban).find('.App-goishi-black')).to.have.length(4)
  //   })
  //
  //   it('click masu for win', () => {
  //     wrapper.find('#App-masu-5-9').simulate('click')  // black (win)
  //     expect(wrapper.find('#App-game-info-left').text()).to.equal('Winner! :')
  //   })
  //
  //   it('cilck masu after win (don\'t click)', () => {
  //     wrapper.find('#App-masu-5-9').simulate('click')  // black (win)
  //     wrapper.find('#App-masu-5-10').simulate('click') // white (don't click)
  //     expect(wrapper.find(Goban).find('.App-goishi-white')).to.have.length(4)
  //   })
  // })
})