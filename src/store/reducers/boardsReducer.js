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

function addingBoard(state, payload) {
  return {
    boards: [...state.boards, payload],
    currentBoard: state.currentBoard,
  };
}

function deletingBoard(state, payload) {
  return {
    boards: state.boards.filter((board) => {
      return board.title + board.color !== payload;
    }),
    currentBoard: state.currentBoard,
  };
}
// TODO:
function choosingBoard(state, payload) {
  return {
    boards: [...state.boards],
    currentBoard: state.boards[payload],
  };
}
