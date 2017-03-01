import React from 'react';

const Masu = (props) => (
  <div className="App-masu" id={ `App-masu-${props.row}-${props.col}` } onClick={() => props.onClick()}>
    {renderGoishi(props.color)}
  </div>
);

function renderGoishi(color) {
  let goishi = "";
  if (color === "black") {
    goishi = <div className="App-goishi-black" />
  } else if (color === "white") {
    goishi = <div className="App-goishi-white" />
  }
  return goishi;
}

export default Masu;