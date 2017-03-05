import React from 'react';
import Goishi from './Goishi';

const Masu = (props) => {
  const color = props.squares[props.row][props.col];
  return (
    <div className="App-masu"
         id={ `App-masu-${props.row}-${props.col}` }
         onClick={() => props.hitGoishi(props.row, props.col)}>
      <Goishi color={color} />
    </div>
  )
};

export default Masu;
