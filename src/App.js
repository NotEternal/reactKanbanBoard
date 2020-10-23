import React from 'react';
import { connect } from 'react-redux';
import {
  addBoard,
  removeBoard,
  chooseBoard,
  changeTask,
  addTaskToDay,
  addTaskToStage,
  addTaskToCompleted,
  addTaskToUnfulfilled,
} from './store/actionCreators/actionCreators';
import UserBoards from './components/UserBoards';

class App extends React.Component {
  render() {
    const {
      objBoards,
      addBoardAction,
      removeBoardAction,
      chooseBoardAction,
      changeTaskAction,
      addTaskToDayAction,
      addTaskToStageAction,
      addTaskToCompletedAction,
      addTaskToUnfulfilledAction,
    } = this.props;

    return (
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <UserBoards
          boards={objBoards.boards}
          currentBoard={objBoards.currentBoard}
          addBoard={addBoardAction}
          removeBoard={removeBoardAction}
          chooseBoard={chooseBoardAction}
          changeTask={changeTaskAction}
          addTaskToDay={addTaskToDayAction}
          addTaskToStage={addTaskToStageAction}
          addTaskToCompleted={addTaskToCompletedAction}
          addTaskToUnfulfilled={addTaskToUnfulfilledAction}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    objBoards: store.objBoards,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addBoardAction: (board) => dispatch(addBoard(board)),
  removeBoardAction: (key) => dispatch(removeBoard(key)),
  chooseBoardAction: (index) => dispatch(chooseBoard(index)),
  changeTaskAction: (arr) => dispatch(changeTask(arr)),
  addTaskToDayAction: (day, task) => dispatch(addTaskToDay(day, task)),
  addTaskToStageAction: (stage, task) => dispatch(addTaskToStage(stage, task)),
  addTaskToCompletedAction: (task) => dispatch(addTaskToCompleted(task)),
  addTaskToUnfulfilledAction: (task) => dispatch(addTaskToUnfulfilled(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
