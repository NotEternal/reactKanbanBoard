import { ADD_BOARD, DELETE_BOARD } from '../actionCreators/actionCreators';

export default function boardsReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOARD:
      return [...state, action.payload];
    case DELETE_BOARD:
      return state.filter((board) => {
        return board.title + board.color !== action.payload;
      });
    default:
      return state;
  }
}
