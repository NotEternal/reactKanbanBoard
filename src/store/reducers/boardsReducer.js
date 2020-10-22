import {
  DELETE_BOARD,
  ADD_BOARD,
  CHOOSE_BOARD,
  ADD_TASK_TO_DAY,
  ADD_TASK_TO_STAGE,
  ADD_TASK_TO_COMPLETED,
  ADD_TASK_TO_UNFULFILLED,
} from '../actionCreators/actionCreators';

const initialState = {
  boards: [],
  currentBoard: undefined,
};

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
      ToDo: array,
      Doing: array,
      Done: array,
    },
  }
*/

export default function boardsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOARD:
      return addingBoard(state, action.payload);
    case DELETE_BOARD:
      return deletingBoard(state, action.payload);
    case CHOOSE_BOARD:
      return choosingBoard(state, action.payload);
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

// ----------------------------------------------------
// ---- BOARDS

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

function choosingBoard(state, payload) {
  return {
    boards: [...state.boards],
    currentBoard: state.boards[payload],
  };
}

// ----------------------------------------------------
// ---- TASKS

function addingTaskToDay(state, payload) {
  const newCurrentBoard = Object.assign(state.currentBoard);
  const [day, task] = payload;

  newCurrentBoard.days[day].push(task);

  return {
    boards: [...state.boards],
    currentBoard: { ...newCurrentBoard },
  };
}

function addingTaskToStage(state, payload) {
  const newCurrentBoard = Object.assign(state.currentBoard);
  const [stage, task] = payload;

  newCurrentBoard.works[stage].push(task);

  return {
    boards: [...state.boards],
    currentBoard: { ...newCurrentBoard },
  };
}

function addingTaskToCompleted(state, payload) {
  const task = payload;

  return state;
}

function addingTaskToUnfulfilled(state, payload) {
  const task = payload;

  return state;
}
