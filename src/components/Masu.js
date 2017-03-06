import React from 'react'
import Goishi from './Goishi'

const Masu = (props) => {
  const color = props.squares[props.row][props.col]
  const goishi = color ? <Goishi color={color} /> : null
  return (
    <div className="App-masu"
         id={ `App-masu-${props.row}-${props.col}` }
         onClick={() => props.hitGoishi(props.row, props.col)}>
      {goishi}
    </div>
  )
}

export default Masu
