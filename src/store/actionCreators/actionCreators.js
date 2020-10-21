import { ADD_BOARD, DELETE_BOARD } from '../actions/actions';

export function addBoard(board) {
  return {
    type: ADD_BOARD,
    payload: board,
  };
}

export function removeBoard(index) {
  return {
    type: DELETE_BOARD,
    payload: index,
  };
}
