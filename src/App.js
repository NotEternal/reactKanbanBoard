import React from 'react';
import { connect } from 'react-redux';
import { addBoard, removeBoard } from './store/actionCreators/actionCreators';
import UserBoards from './components/UserBoards';

class App extends React.Component {
  render() {
    const { boards, addBoardAction, removeBoardAction } = this.props;

    return (
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <UserBoards
          boards={boards}
          addBoard={addBoardAction}
          removeBoard={removeBoardAction}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    boards: store.boards,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addBoardAction: (board) => dispatch(addBoard(board)),
  removeBoardAction: (index) => dispatch(removeBoard(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
