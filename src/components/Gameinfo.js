import React, { Component } from 'react'
import Goishi from './Goishi'

class Gameinfo extends Component {
  render() {
    let informations = ''

    if (this.props.winner) {
      informations =
        <ul>
          <li id="App-game-info-left">Winner! :</li>
          <li id="App-game-info-right"><Goishi color={this.props.winner} /></li>
        </ul>
    } else {
      informations =
        <ul>
          <li id="App-game-info-left">Next player:</li>
          <li id="App-game-info-right"><Goishi color={this.props.current} /></li>
        </ul>
    }
    return (
      <div id="App-game-info">
        {informations}
      </div>
    )
  }
}

export default Gameinfo