import actions from '../actions/index';
import initialState from './initialState';

export default function currentBoardReducer(
  state = initialState.currentBoard,
  action
) {
  const currentBoardActions = actions.currentBoard;

  switch (action.type) {
    case currentBoardActions.CHANGE_TASK:
      return changingTask(state, action.payload);
    case currentBoardActions.ADD_TASK_TO_DAY:
      return addingTaskToDay(state, action.payload);
    case currentBoardActions.ADD_TASK_TO_STAGE:
      return addingTaskToStage(state, action.payload);
    case currentBoardActions.ADD_TASK_TO_COMPLETED:
      return addingTaskToMenuLists('completed', state, action.payload);
    case currentBoardActions.ADD_TASK_TO_UNFULFILLED:
      return addingTaskToMenuLists('unfulfilled', state, action.payload);
    case currentBoardActions.UPDATE_TASK_ORDER_IN_COLUMN:
      return updatingTaskOrderInColumn(state, action.payload);
    default:
      return state;
  }
}

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
