import React, { Component } from 'react';
import Gameinfo from '../containers/Gameinfo';
import Goban from '../components/Goban';
import judgement from '../Judgement';
import Sound from '../Sound';

class Game extends Component {
  constructor() {
    super();

    this.sound = new Sound();
  }

  render() {
    return (
      <div id="App-game">
        <Gameinfo />
        <Goban onClick={(row, col) => this.handleClick(row, col)} />
      </div>
    );
  }

  handleClick(row, col) {
    // game end check
    if (this.props.winner) {
      return;
    }

    // check valid hit
    if (!judgement.validatesHit(this.props, row, col)) {
      return;
    }

    // sound play
    this.sound.play(this.props.current);

    this.props.hitGoishi(row, col);

    // check winner
    this.props.calculateWinner(this.props.current, row, col);
  }
}

export default Game;