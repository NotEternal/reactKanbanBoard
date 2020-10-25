import {
  CHANGE_TASK,
  ADD_TASK_TO_DAY,
  ADD_TASK_TO_STAGE,
  ADD_TASK_TO_COMPLETED,
  ADD_TASK_TO_UNFULFILLED,
  UPDATE_TASK_ORDER_IN_COLUMN
} from '../actions/actions';

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

export function addTaskToCompleted(arr) {
  return {
    type: ADD_TASK_TO_COMPLETED,
    payload: arr,
  };
}

export function addTaskToUnfulfilled(arr) {
  return {
    type: ADD_TASK_TO_UNFULFILLED,
    payload: arr,
  };
}

export function updateTaskOrderInColumn(arr) {
  return {
    type: UPDATE_TASK_ORDER_IN_COLUMN,
    payload: arr,
  };
}
