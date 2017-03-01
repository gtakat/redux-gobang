import React, { Component } from 'react';

class Gameinfo extends Component {
  render() {
    console.info(this.props);
    let informations = "";
    // const state = this.props;
    const state = this.props;

    if (state.winner) {
      informations =
        <ul>
          <li id="App-game-info-left">Winner! :</li>
          <li id="App-game-info-right">{renderGoishi(state.winner)}</li>
        </ul>
    } else {
      informations =
        <ul>
          <li id="App-game-info-left">Next player:</li>
          <li id="App-game-info-right">{renderGoishi(this.props.current)}</li>
        </ul>
    }
    return (
      <div id="App-game-info">
        {informations}
      </div>
    );
  }
}

function renderGoishi(color) {
  let goishi = "";
  if (color === "black") {
    goishi = <div className="App-goishi-black" />
  } else if (color === "white") {
    goishi = <div className="App-goishi-white" />
  }
  return goishi;
}

export default Gameinfo;