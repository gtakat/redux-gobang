import * as types from '../constants/ActionTypes'

export const hitGoishi = (row, col) => ({type: types.HIT_GOISHI, row, col});
export const calculateWinner =  (current, row, col) => ({type: types.CALCULATE_WINNER, current, row, col});