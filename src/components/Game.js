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
        <Gameinfo current={this.props.current} winner={this.props.winner} />
        <Goban squares={this.props.squares} onClick={(row, col) => this.handleClick(row, col)} />
      </div>
    );
  }

  handleClick(row, col) {
    let state = this.props;

    // game end check
    if (state.winner) {
      return;
    }

    // check valid hit
    if (!this.judgement.validatesHit(state, row, col)) {
      return;
    }

    const current = state.current;

    // sound play
    this.sound.play(current);

    this.props.hitGoishi(row, col);
    state = this.props;

    // check winner
    let isWin = this.judgement.calculateWinner(state.squares, current, row, col);
    if (isWin) {
      this.props.winnerDecision(state.current);
    }
  }
}

export default Game;