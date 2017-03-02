import React, { Component } from 'react';
import Gameinfo from '../containers/Gameinfo';
import Goban from '../containers/Goban';
import Judgement from '../Judgement';
import Sound from '../Sound';

class Game extends Component {
  constructor() {
    super();

    this.judgement = new Judgement();
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
    if (!this.judgement.validatesHit(this.props, row, col)) {
      return;
    }

    // sound play
    this.sound.play(this.props.current);

    this.props.hitGoishi(row, col);

    // check winner
    let isWin = this.judgement.calculateWinner(this.props.squares, this.props.current, row, col);
    if (isWin) {
      this.props.winnerDecision(this.props.current);
    }
  }
}

export default Game;