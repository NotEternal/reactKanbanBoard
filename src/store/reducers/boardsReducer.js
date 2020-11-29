import actions from '../actions/index';

/*
 * Board struct
 *
 * board: {
 *   title: string,
 *   color: string,
 *   completedTasks: array,
 *   unfulfilledTasks: array,
 *   days: {
 *       Monday: array,
 *       Tuesday: array,
 *       Wednesday: array,
 *       Thursday: array,
 *       Friday: array,
 *       Saturday: array,
 *       Sunday: array,
 *   },
 *   works: {
 *     ToDo: array,
 *     Doing: array,
 *     Done: array,
 *   },
 * }
 */

const initialState = {
  boards: [],
  currentBoard: undefined,
  // just for delopment
  // currentBoard: {
  //   title: 'Title',
  //   color: 'white',
  //   completedTasks: [],
  //   unfulfilledTasks: [],
  //   days: {
  //     Monday: [],
  //     Tuesday: [],
  //     Wednesday: [],
  //     Thursday: [],
  //     Friday: [],
  //     Saturday: [],
  //     Sunday: [],
  //   },
  //   works: {
  //     ToDo: [],
  //     Doing: [],
  //     Done: [],
  //   },
  // },
};

export default function boardsReducer(state = initialState, action) {
  const boardActions = actions.board;
  const taskActions = actions.board;

  switch (action.type) {
    case boardActions.ADD_BOARD:
      return addingBoard(state, action.payload);
    case boardActions.DELETE_BOARD:
      return deletingBoard(state, action.payload);
    case boardActions.CHOOSE_BOARD:
      return choosingBoard(state, action.payload);
    case taskActions.CHANGE_TASK:
      return changingTask(state, action.payload);
    case taskActions.ADD_TASK_TO_DAY:
      return addingTaskToDay(state, action.payload);
    case taskActions.ADD_TASK_TO_STAGE:
      return addingTaskToStage(state, action.payload);
    case taskActions.ADD_TASK_TO_COMPLETED:
      return addingTaskToMenuLists('completed', state, action.payload);
    case taskActions.ADD_TASK_TO_UNFULFILLED:
      return addingTaskToMenuLists('unfulfilled', state, action.payload);
    case taskActions.UPDATE_TASK_ORDER_IN_COLUMN:
      return updatingTaskOrderInColumn(state, action.payload);
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

function changingTask(state, payload) {
  const newCurrentBoard = Object.assign(state.currentBoard);
  const [place, section, index, newTask] = payload;

  newCurrentBoard[place][section][index] = newTask;

  return {
    boards: [...state.boards],
    currentBoard: { ...newCurrentBoard },
  };
}

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

/**
 * @param  {string} list
 * @param  {object} state
 * @param  {array} payload
 */
function addingTaskToMenuLists(list, state, payload) {
  const newCurrentBoard = Object.assign(state.currentBoard);
  const [place, section, index, task] = payload;

  newCurrentBoard[place][section].splice(index, 1);
  const timeNow = returnTimeNow();

  try {
    if (list === 'completed') {
      newCurrentBoard.completedTasks.push([task, timeNow]);
    } else if (list === 'unfulfilled') {
      newCurrentBoard.unfulfilledTasks.push([task, timeNow]);
    } else {
      throw new Error('Error on adding task in menu lists');
    }
  } catch (error) {
    console.error(error);
  }

  return {
    boards: [...state.boards],
    currentBoard: { ...newCurrentBoard },
  };
}

function returnTimeNow() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const monthDay = new Date().getDate();
  const weekDay = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ][new Date().getDay()];
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();

  return `${year}.${month}.${monthDay} - ${weekDay} - ${hours}:${minutes}`;
}

function updatingTaskOrderInColumn(state, payload) {
  const newCurrentBoard = Object.assign(state.currentBoard);
  const { draggedTaskArr, changeableTaskArr } = payload;

  // TODO: changed array in current border
  // const [draggedIndex, draggedTask] = draggedTaskArr;
  // const [changeabledIndex, changeabledTask] = changeableTaskArr;

  return {
    boards: [...state.boards],
    currentBoard: { ...newCurrentBoard },
  };
}
