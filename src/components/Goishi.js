import React from 'react'

const Goishi = (props) => {
  if (props.color === 'black') {
    return <div className="App-goishi-black" />
  } else if (props.color === 'white') {
    return <div className="App-goishi-white" />
  }
  return null
}

export default Goishi