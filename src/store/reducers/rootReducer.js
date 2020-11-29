import { combineReducers } from 'redux';

import boardsReducer from './boardsReducer';
import currentBoardReducer from './currentBoardReducer';

export default combineReducers({
  boards: boardsReducer,
  currentBoard: currentBoardReducer,
});
