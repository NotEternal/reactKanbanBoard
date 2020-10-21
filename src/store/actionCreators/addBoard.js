import ADD from '../actions/add';

export default function addBoard(board) {
  return {
    type: ADD,
    value: board,
  };
}
