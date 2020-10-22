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
      currentBoard: null,
      modalVisible: false,
      optionsVisible: false,
    };
  }

  render() {
    return (
      <section style={userBoardsStyles}>
        {this.state.currentBoard ? (
          <Board
            backToBoards={this.backToBoards}
            currentBoard={this.state.currentBoard}
            board={this.state.currentBoard}
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
                  removeBoard={this.props.removeBoard}
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

  createBoard = ({ title, color }) => {
    let coincidence = false;

    this.props.boards.forEach((board) => {
      if (board.title === title && board.color === color) {
        coincidence = true;
      }
    });

    if (!coincidence) {
      this.props.addBoard({ title, color });
      this.backToBoards();
    } else {
      this.toggleModal();
    }
  };

  toggleDestroyMode = () => {
    this.setState({
      destroyMode: !this.state.destroyMode,
    });
  };

  openBoard = (board) => {
    this.setState({
      currentBoard: board,
    });
  };

  backToBoards = () => {
    this.setState({
      currentBoard: null,
    });
  };

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };
}
