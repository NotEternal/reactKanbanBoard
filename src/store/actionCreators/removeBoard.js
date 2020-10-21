import REMOVE from '../actions/remove';

export default function removeBoard(board) {
  return {
    type: REMOVE,
    value: board,
  };
}
