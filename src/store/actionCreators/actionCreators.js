export const ADD_BOARD = 'ADD_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';

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
