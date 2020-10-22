import { DELETE_BOARD, ADD_BOARD } from '../actionCreators/actionCreators';

const initialState = [];

export default function boardsReducer(state = initialState, action) {
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
