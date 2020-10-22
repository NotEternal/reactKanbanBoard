import React from 'react';
import { connect } from 'react-redux';
import { addBoard, removeBoard } from './store/actionCreators/actionCreators';
import UserBoards from './components/UserBoards';

class App extends React.Component {
  render() {
    const { state, addBoardAction, removeBoardAction } = this.props;
    console.log('App -> render -> state', state);

    return (
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <UserBoards
          boards={state.boards}
          addBoard={addBoardAction}
          removeBoard={removeBoardAction}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
