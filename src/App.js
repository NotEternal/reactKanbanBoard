import React from 'react';
import { connect } from 'react-redux';
import {
  addBoard,
  removeBoard,
  addTaskToDay,
  addTaskToStage,
  addTaskToCompleted,
  addTaskToUnfulfilled,
} from './store/actionCreators/actionCreators';
import UserBoards from './components/UserBoards';

class App extends React.Component {
  render() {
    const {
      state,
      addBoardAction,
      removeBoardAction,
      addTaskToDayAction,
      addTaskToStageAction,
      addTaskToCompletedAction,
      addTaskToUnfulfilledAction,
    } = this.props;
    console.log('App -> render -> state', state);

    return (
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <UserBoards
          boards={state.boards}
          addBoard={addBoardAction}
          removeBoard={removeBoardAction}
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
    state: store,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addBoardAction: (board) => dispatch(addBoard(board)),
  removeBoardAction: (key) => dispatch(removeBoard(key)),
  addTaskToDayAction: (day, task) => dispatch(addTaskToDay(day, task)),
  addTaskToStageAction: (stage, task) => dispatch(addTaskToStage(stage, task)),
  addTaskToCompletedAction: (task) => dispatch(addTaskToCompleted(task)),
  addTaskToUnfulfilledAction: (task) => dispatch(addTaskToUnfulfilled(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
