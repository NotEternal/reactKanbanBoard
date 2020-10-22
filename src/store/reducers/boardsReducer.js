import {
  DELETE_BOARD,
  ADD_BOARD,
  ADD_TASK_TO_DAY,
  ADD_TASK_TO_STAGE,
  ADD_TASK_TO_COMPLETED,
  ADD_TASK_TO_UNFULFILLED,
} from '../actionCreators/actionCreators';

const initialState = [];

/*
  STRUCT BOARD

  board: {
    title: string,
    color: string,
    completedTasks: array,
    unfulfilledTasks: array,
    days: {
        Monday: array,
        Tuesday: array,
        Wednesday: array,
        Thursday: array,
        Friday: array,
        Saturday: array,
        Sunday: array,
    },
    works: {
      todo: array,
      doing: array,
      done: array,
    },
  }
*/

export default function boardsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOARD:
      return [...state, action.payload];
    case DELETE_BOARD:
      return state.filter((board) => {
        return board.title + board.color !== action.payload;
      });
    case ADD_TASK_TO_DAY:
      return addingTaskToDay(state, action.payload);
    case ADD_TASK_TO_STAGE:
      return addingTaskToStage(state, action.payload);
    case ADD_TASK_TO_COMPLETED:
      return addingTaskToCompleted(state, action.payload);
    case ADD_TASK_TO_UNFULFILLED:
      return addingTaskToUnfulfilled(state, action.payload);
    default:
      return state;
  }
}

function addingTaskToDay(state, payload) {
  const [day, task] = payload;

  return state;
}

function addingTaskToStage(state, payload) {
  const [stage, task] = payload;

  return state;
}

function addingTaskToCompleted(state, payload) {
  const task = payload;

  return state;
}

function addingTaskToUnfulfilled(state, payload) {
  const task = payload;

  return state;
}
