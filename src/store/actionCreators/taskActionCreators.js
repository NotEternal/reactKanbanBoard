import actions from '../actions/index';

const taskActions = actions.task;

const changeTask = (arr) => {
  return {
    type: taskActions.CHANGE_TASK,
    payload: arr,
  };
};

const addTaskToDay = (day, task) => {
  return {
    type: taskActions.ADD_TASK_TO_DAY,
    payload: [day, task],
  };
};

const addTaskToStage = (stage, task) => {
  return {
    type: taskActions.ADD_TASK_TO_STAGE,
    payload: [stage, task],
  };
};

const addTaskToCompleted = (arr) => {
  return {
    type: taskActions.ADD_TASK_TO_COMPLETED,
    payload: arr,
  };
};

const addTaskToUnfulfilled = (arr) => {
  return {
    type: taskActions.ADD_TASK_TO_UNFULFILLED,
    payload: arr,
  };
};

const updateTaskOrderInColumn = (arr) => {
  return {
    type: taskActions.UPDATE_TASK_ORDER_IN_COLUMN,
    payload: arr,
  };
};

export default {
  changeTask,
  addTaskToDay,
  addTaskToStage,
  addTaskToCompleted,
  addTaskToUnfulfilled,
  updateTaskOrderInColumn,
};
