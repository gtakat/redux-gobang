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
    const state = this.props;
    console.info(this.props);
    return (
      <div id="App-game">
        <Gameinfo current={state.current} winner={state.winner} />
        <Goban squares={state.squares} onClick={(row, col) => this.handleClick(row, col)} />
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

    // store.dispatch(hitGoishi(row, col));
    state = this.props;

    console.info(state);

    // check winner
    let isWin = this.judgement.calculateWinner(state.squares, current, row, col);
    if (isWin) {
      // store.dispatch(winnerDecision(state.current));
    }
  }
}

export default Game;