import actions from '../actions/index';

const taskActions = actions.task;

export function changeTask(arr) {
  return {
    type: taskActions.CHANGE_TASK,
    payload: arr,
  };
}

export function addTaskToDay(day, task) {
  return {
    type: taskActions.ADD_TASK_TO_DAY,
    payload: [day, task],
  };
}

export function addTaskToStage(stage, task) {
  return {
    type: taskActions.ADD_TASK_TO_STAGE,
    payload: [stage, task],
  };
}

export function addTaskToCompleted(arr) {
  return {
    type: taskActions.ADD_TASK_TO_COMPLETED,
    payload: arr,
  };
}

export function addTaskToUnfulfilled(arr) {
  return {
    type: taskActions.ADD_TASK_TO_UNFULFILLED,
    payload: arr,
  };
}

export function updateTaskOrderInColumn(arr) {
  return {
    type: taskActions.UPDATE_TASK_ORDER_IN_COLUMN,
    payload: arr,
  };
}
