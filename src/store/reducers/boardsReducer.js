import { ADD_BOARD, DELETE_BOARD } from '../actions/actions';

export default function boardsReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOARD:
      return [...state, action.payload];
    case DELETE_BOARD:
      return state.filter((board, index) => {
        return index !== action.payload.index;
      });
    default:
      return state;
  }
}
