import actions from '../actions/index';

const boardActions = actions.board;

export function addBoard(board) {
  return {
    type: boardActions.ADD_BOARD,
    payload: board,
  };
}

export function removeBoard(key) {
  return {
    type: boardActions.DELETE_BOARD,
    payload: key,
  };
}

export function chooseBoard(index) {
  return {
    type: boardActions.CHOOSE_BOARD,
    payload: index,
  };
}
