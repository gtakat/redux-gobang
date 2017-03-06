import { expect } from 'chai'
import sound from '../Sound'

describe('sound', () => {
  describe('sound play', () => {
    it('play black', () => {
      expect(sound.play('black')).to.equal('black')
    })

    it('play white', () => {
      expect(sound.play('white')).to.equal('white')
    })

    it('play fail', () => {
      expect(sound.play('xxx')).to.be.false
    })
  })
})
