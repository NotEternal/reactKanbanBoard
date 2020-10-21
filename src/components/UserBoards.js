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
      boards: [],
      destroyMode: false,
      // currentBoard: null,
      currentBoard: {
        title: 'test',
        color: '#fff',
      },
      modalVisible: false,
      optionsVisible: false,
    };
  }

  render() {
    return (
      <section style={userBoardsStyles}>
        <Board
          backToBoards={this.backToBoards}
          currentBoard={this.state.currentBoard}
          board={this.state.currentBoard}
        />
        {/* {this.state.currentBoard ? (
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
                <Title size="3em">Your boards</Title>
                <ListBoards
                  toggleOptions={this.toggleOptions}
                  toggleDestroyMode={this.toggleDestroyMode}
                  openBoard={this.openBoard}
                  createBoard={this.createBoard}
                  deletedBoard={this.deletedBoard}
                  destroyMode={this.state.destroyMode}
                  list={this.state.boards}
                />
              </div>
            )}
          </Container>
        )} */}
        <Modal visible={this.state.modalVisible}>
          <Button arrFunctions={[this.toggleModal]}>Close</Button>
          <p
            style={{ maxWidth: '25em', textAlign: 'center', fontSize: '1.6em' }}
          >
            Sorry but you can't make board with one title and color
          </p>
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

    this.state.boards.forEach((board) => {
      if (board.title === title && board.color === color) {
        coincidence = true;
      }
    });

    if (!coincidence) {
      this.setState({
        boards: [
          ...this.state.boards,
          {
            title: title,
            color: color,
          },
        ],
      });
      this.backToBoards();
    } else {
      this.toggleModal();
    }
  };

  deletedBoard = (currentBoard) => {
    this.setState({
      boards: this.state.boards.filter((board) => {
        if (board.title + board.color !== currentBoard.textContent) {
          return board;
        }
      }),
    });
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
