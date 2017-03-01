import React from 'react';
import Goishi from './Goishi';

const Masu = (props) => (
  <div className="App-masu" id={ `App-masu-${props.row}-${props.col}` } onClick={() => props.onClick()}>
    <Goishi color={props.color} />
  </div>
);

export default Masu;