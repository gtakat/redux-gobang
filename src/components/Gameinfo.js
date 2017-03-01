import React, { Component } from 'react';

class Gameinfo extends Component {
  render() {
    let informations = "";

    if (this.props.winner) {
      informations =
        <ul>
          <li id="App-game-info-left">Winner! :</li>
          <li id="App-game-info-right">{renderGoishi(this.props.winner)}</li>
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