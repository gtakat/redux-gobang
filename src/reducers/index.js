import * as types from '../constants/ActionTypes';
import judgement from '../Judgement';

const initialState = () => {
  const squares = Array(19);
  for (let i=0; i<squares.length; i++) {
    squares[i] = Array(19).fill(null);
  }
  return {
    squares,
    current: "black",
    step: 1,
    winner: null,
  };
}

const reducer = (state=null, action) => {
  if (state == null) {
    return initialState();
  }

  switch(action.type){
    case types.HIT_GOISHI:
      const newSquares = state.squares.slice(0);
      newSquares[action.row][action.col] = state.current;
      const nextPlayer = state.current === "black" ? "white" : "black";

      return Object.assign({}, state, {
        squares: newSquares,
        current: nextPlayer,
        step: state.step + 1
      });

    case types.CALCULATE_WINNER:
      const isWin = judgement.calculateWinner(state.squares, action.current, action.row, action.col);
      if (isWin) {
        return Object.assign({}, state, {
          winner: action.current
        });
      }
      return state;

    default:
      return state;
  }
};

export default reducer;