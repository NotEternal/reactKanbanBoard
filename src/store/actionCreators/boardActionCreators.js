import actions from '../actions/index';

const boardActions = actions.board;

const addBoard = (board) => {
  return {
    type: boardActions.ADD_BOARD,
    payload: board,
  };
};

const removeBoard = (key) => {
  return {
    type: boardActions.DELETE_BOARD,
    payload: key,
  };
};

const chooseBoard = (index) => {
  return {
    type: boardActions.CHOOSE_BOARD,
    payload: index,
  };
};

export default {
  addBoard,
  removeBoard,
  chooseBoard,
};
