import React from 'react';
import { connect } from 'react-redux';
import {
  boardActionCreators as boardAC,
  taskActionCreators as taskAC,
} from './store/actionCreators/index';
import UserBoards from './components/UserBoards';

const App = (props) => {
  const {
    objBoards: { boards, currentBoard },
    addBoardAction,
    removeBoardAction,
    chooseBoardAction,
    changeTaskAction,
    addTaskToDayAction,
    addTaskToStageAction,
    addTaskToCompletedAction,
    addTaskToUnfulfilledAction,
    updateTaskOrderInColumnAction,
  } = props;

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <UserBoards
        boards={boards}
        board={currentBoard}
        addBoard={addBoardAction}
        removeBoard={removeBoardAction}
        chooseBoard={chooseBoardAction}
        changeTask={changeTaskAction}
        addTaskToDay={addTaskToDayAction}
        addTaskToStage={addTaskToStageAction}
        addTaskToCompleted={addTaskToCompletedAction}
        addTaskToUnfulfilled={addTaskToUnfulfilledAction}
        updateTaskOrderInColumn={updateTaskOrderInColumnAction}
      />
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    objBoards: store.objBoards,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addBoardAction: (board) => dispatch(boardAC.addBoard(board)),
  removeBoardAction: (key) => dispatch(boardAC.removeBoard(key)),
  chooseBoardAction: (index) => dispatch(boardAC.chooseBoard(index)),
  changeTaskAction: (array) => dispatch(taskAC.changeTask(array)),
  addTaskToDayAction: (day, task) => dispatch(taskAC.addTaskToDay(day, task)),
  addTaskToStageAction: (stage, task) =>
    dispatch(taskAC.addTaskToStage(stage, task)),
  addTaskToCompletedAction: (array) =>
    dispatch(taskAC.addTaskToCompleted(array)),
  addTaskToUnfulfilledAction: (array) =>
    dispatch(taskAC.addTaskToUnfulfilled(array)),
  updateTaskOrderInColumnAction: (taskObj) =>
    dispatch(taskAC.updateTaskOrderInColumn(taskObj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
