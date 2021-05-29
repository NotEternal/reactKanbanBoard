import actions from '../actions/index';
import initialState from './initialState';

export default function boardsReducer(state = initialState.boards, action) {
  const boardActions = actions.board;

  switch (action.type) {
    case boardActions.ADD_BOARD:
      return addingBoard(state, action.payload);
    case boardActions.DELETE_BOARD:
      return deletingBoard(state, action.payload);
    case boardActions.CHOOSE_BOARD:
      return choosingBoard(state, action.payload);
    default:
      return state;
  }
}

function addingBoard(state, newBoard) {
  return [...state, newBoard];
}

function deletingBoard(state, targetBoard) {
  const filteredBoards = state.filter((board) => {
    return board.title + board.color !== targetBoard;
  });

  return filteredBoards;
}

function choosingBoard(state, target) {
  return state[target];
}
