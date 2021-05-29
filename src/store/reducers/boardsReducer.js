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
    ...state,
    boards: [...state.boards, payload],
  };
}

function deletingBoard(state, payload) {
  return {
    ...state,
    boards: state.boards.filter((board) => {
      return board.title + board.color !== payload;
    }),
  };
}

function choosingBoard(state, payload) {
  return {
    ...state,
    currentBoard: state.boards[payload],
  };
}
