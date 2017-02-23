import * as types from '../constants/ActionTypes'

export const hitGoishi = (row, col) => ({type: types.HIT_GOISHI, row, col})
export const winnerDecision = (winner) => ({type: types.WINNER_DECISION, winner})