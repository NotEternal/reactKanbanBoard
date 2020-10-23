export const ADD_BOARD = 'ADD_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';
export const CHOOSE_BOARD = 'CHOOSE_BOARD';
export const CHANGE_TASK = 'CHANGE_TASK';
export const ADD_TASK_TO_DAY = 'ADD_TASK_TO_DAY';
export const ADD_TASK_TO_STAGE = 'ADD_TASK_TO_STAGE';
export const ADD_TASK_TO_COMPLETED = 'ADD_TASK_TO_COMPLETED';
export const ADD_TASK_TO_UNFULFILLED = 'ADD_TASK_TO_UNFULFILLED';

// --------------------------------------------------------
// --------- BOARDS

export function addBoard(board) {
  return {
    type: ADD_BOARD,
    payload: board,
  };
}

export function removeBoard(key) {
  return {
    type: DELETE_BOARD,
    payload: key,
  };
}

export function chooseBoard(index) {
  return {
    type: CHOOSE_BOARD,
    payload: index,
  };
}

// --------------------------------------------------------
// --------- TASKS

export function changeTask(arr) {
  return {
    type: CHANGE_TASK,
    payload: arr,
  };
}

export function addTaskToDay(day, task) {
  return {
    type: ADD_TASK_TO_DAY,
    payload: [day, task],
  };
}

export function addTaskToStage(stage, task) {
  return {
    type: ADD_TASK_TO_STAGE,
    payload: [stage, task],
  };
}

export function addTaskToCompleted(task) {
  return {
    type: ADD_TASK_TO_COMPLETED,
    payload: task,
  };
}

export function addTaskToUnfulfilled(task) {
  return {
    type: ADD_TASK_TO_UNFULFILLED,
    payload: task,
  };
}
