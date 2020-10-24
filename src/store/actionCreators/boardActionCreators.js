import { ADD_BOARD, DELETE_BOARD, CHOOSE_BOARD } from '../actions/actions';

export function addBoard(board) {
  return {
    type: ADD_BOARD,
    payload: board,
  };
}

export function removeBoard(key) {
  return {
    type: DELETE_BOARD,
    payload: key,
  };
}

export function chooseBoard(index) {
  return {
    type: CHOOSE_BOARD,
    payload: index,
  };
}
