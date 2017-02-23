import * as types from '../constants/ActionTypes'

export hitGoishi = (row, col) => ({type: types.HIT_GOISHI, row, col})
export winnerDecision = (winner) => ({type: types.WINNER_DECISION, winner})