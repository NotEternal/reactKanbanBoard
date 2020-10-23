import React from 'react';
import Container from '../common/Container';
import Title from '../common/Title';
import Modal from '../common/Modal';
import Button from '../common/Button';
import CreateBoard from './CreateBoard';
import Board from './Board';
import ListBoards from './ListBoards';

const userBoardsStyles = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default class UserBoards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destroyMode: false,
      modalVisible: false,
      optionsVisible: false,
    };
  }

  render() {
    return (
      <section style={userBoardsStyles}>
        {this.props.currentBoard ? (
          <Board
            addTaskToCompleted={this.props.addTaskToCompleted}
            addTaskToUnfulfilled={this.props.addTaskToUnfulfilled}
            changeTask={this.props.changeTask}
            addTaskToStage={this.props.addTaskToStage}
            addTaskToDay={this.props.addTaskToDay}
            backToBoards={this.backToBoards}
            board={this.props.currentBoard}
          />
        ) : (
          <Container>
            {this.state.optionsVisible ? (
              <CreateBoard
                toggleOptions={this.toggleOptions}
                createBoard={this.createBoard}
              />
            ) : (
              <div style={{ width: '100%' }}>
                <Title padding="1em 0" size="3em">
                  Your boards
                </Title>
                <ListBoards
                  toggleOptions={this.toggleOptions}
                  toggleDestroyMode={this.toggleDestroyMode}
                  openBoard={this.openBoard}
                  deleteBoard={this.deleteBoard}
                  destroyMode={this.state.destroyMode}
                  boards={this.props.boards}
                />
              </div>
            )}
          </Container>
        )}
        <Modal visible={this.state.modalVisible}>
          <div style={{ textAlign: 'center' }}>
            <Button arrFunctions={[this.toggleModal]}>Close</Button>
            <p
              style={{
                maxWidth: '25em',
                textAlign: 'center',
                fontSize: '1.6em',
              }}
            >
              Sorry but you cannot have boards with the same name and color
            </p>
          </div>
        </Modal>
      </section>
    );
  }

  toggleOptions = () => {
    this.setState({
      optionsVisible: !this.state.optionsVisible,
    });
  };

  createBoard = (newBoard) => {
    let coincidence = false;

    this.props.boards.forEach((board) => {
      if (board.title === newBoard.title && board.color === newBoard.color) {
        coincidence = true;
      }
    });

    if (!coincidence) {
      this.props.addBoard(newBoard);
      this.backToBoards();
    } else {
      this.toggleModal();
    }
  };

  deleteBoard = (key) => {
    this.props.removeBoard(key);
  };

  toggleDestroyMode = () => {
    this.setState({
      destroyMode: !this.state.destroyMode,
    });
  };

  openBoard = (index) => {
    this.props.chooseBoard(index);
  };

  backToBoards = () => {
    this.props.chooseBoard(null);
  };

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };
}
