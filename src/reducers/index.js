import * as types from '../constants/ActionTypes'
import judgement from '../Judgement'
import sound from '../Sound'

const initialState = () => {
  const squares = Array(19)
  for (let i=0; i<squares.length; i++) {
    squares[i] = Array(19).fill(null)
  }
  return {
    squares,
    current: 'black',
    step: 1,
    winner: null,
  }
}

const reducer = (state=null, action) => {
  if (state == null) {
    return initialState()
  }

  switch(action.type){
  case types.HIT_GOISHI: {
    // game end check
    if (state.winner) {
      return state
    }

    // check valid hit
    if (!judgement.validatesHit(state, action.row, action.col)) {
      return state
    }

    // sound play
    sound.play(state.current)

    // hit goishi
    const newSquares = state.squares.slice(0)
    newSquares[action.row][action.col] = state.current
    const currentPlayer = state.current
    const nextPlayer = state.current === 'black' ? 'white' : 'black'

    const newState = Object.assign({}, state, {
      squares: newSquares,
      current: nextPlayer,
      step: state.step + 1
    })

    // check winner
    const isWin = judgement.calculateWinner(state.squares, currentPlayer, action.row, action.col)
    if (isWin) {
      newState.winner = currentPlayer
    }
    return newState
  }
  default:
    return state
  }
}

export default reducer