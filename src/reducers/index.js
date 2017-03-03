import * as types from '../constants/ActionTypes';

const reducer = (state=null, action) => {
  if (state == null) {
    let squares = Array(19);
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

  switch(action.type){
    case types.HIT_GOISHI:
      let newSquares = state.squares.slice(0);
      newSquares[action.row][action.col] = state.current;
      const nextPlayer = state.current === "black" ? "white" : "black";

      return Object.assign({}, state, {
        squares: newSquares,
        current: nextPlayer,
        step: state.step + 1
      });

    case types.WINNER_DECISION:
      return Object.assign({}, state, {
        winner: action.winner
      });

    default:
      return state;
  }
};

export default reducer;