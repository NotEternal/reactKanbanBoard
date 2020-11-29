import React from 'react';
import { connect } from 'react-redux';
import {
  boardActionCreators as boardAC,
  taskActionCreators as taskAC,
} from './store/actionCreators/index';
import UserBoards from './components/UserBoards';

const App = (props) => {
  const {
    boards: { boards, currentBoard },
    addBoard,
    removeBoard,
    chooseBoard,
    changeTask,
    addTaskToDay,
    addTaskToStage,
    addTaskToCompleted,
    addTaskToUnfulfilled,
    updateTaskOrderInColumn,
  } = props;

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <UserBoards
        boards={boards}
        board={currentBoard}
        addBoard={addBoard}
        removeBoard={removeBoard}
        chooseBoard={chooseBoard}
        changeTask={changeTask}
        addTaskToDay={addTaskToDay}
        addTaskToStage={addTaskToStage}
        addTaskToCompleted={addTaskToCompleted}
        addTaskToUnfulfilled={addTaskToUnfulfilled}
        updateTaskOrderInColumn={updateTaskOrderInColumn}
      />
    </div>
  );
};

const mapStateToProps = (store) => store;

const mapDispatchToProps = (dispatch) => ({
  addBoard: (board) => dispatch(boardAC.addBoard(board)),
  removeBoard: (key) => dispatch(boardAC.removeBoard(key)),
  chooseBoard: (index) => dispatch(boardAC.chooseBoard(index)),
  changeTask: (array) => dispatch(taskAC.changeTask(array)),
  addTaskToDay: (day, task) => dispatch(taskAC.addTaskToDay(day, task)),
  addTaskToStage: (stage, task) => dispatch(taskAC.addTaskToStage(stage, task)),
  addTaskToCompleted: (array) => dispatch(taskAC.addTaskToCompleted(array)),
  addTaskToUnfulfilled: (array) => dispatch(taskAC.addTaskToUnfulfilled(array)),
  updateTaskOrderInColumn: (taskObj) =>
    dispatch(taskAC.updateTaskOrderInColumn(taskObj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
