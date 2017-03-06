import React, { Component } from 'react'
import Masu from '../containers/Masu'

class Goban extends Component {
  render() {
    const squares = []

    for (let i=0; i<19; i++) {
      for(let j=0; j<19; j++) {
        const key = `${i}_${j}`
        let masu = <Masu key={key}
                         row={i}
                         col={j} />
        squares.push(masu)
      }
    }
    return (
      <div id="App-goban">
        <div>{squares}</div>
      </div>
    )
  }
}

export default Goban