import React from 'react';
import Container from '../common/Container';
import Title from '../common/Title';
import Modal from '../common/Modal';
import Button from '../common/Button';
import CreateBoard from './CreateBoard';
import Board from './Board';
import ListBoards from './ListBoards';

const titleIconsTask = (
  <svg
    style={{
      width: '.9em',
      height: '.9em',
      marginRight: '1rem',
      fill: '#fff',
    }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 489.6 489.6"
  >
    <path
      d="M434.65,52.2h-96.6V18c0-9.9-8.1-18-18-18h-150.4c-9.9,0-18,8.1-18,18v94.7c0,9.9,8.1,18,18,18h111.2c9.9,0,18-8.1,18-18
			c0-9.9-8.1-18-18-18h-93.2V36h114.5v34.2c0,9.9,8.1,18,18,18h96.6v365.4H72.95V88.2h27.5c9.9,0,18-8.1,18-18c0-9.9-8.1-18-18-18
			h-45.5c-9.9,0-18,8.1-18,18v401.4c0,9.9,8.1,18,18,18h379.7c9.9,0,18-8.1,18-18V70.2C452.65,60.3,444.55,52.2,434.65,52.2z"
    />
    <path
      d="M327.75,217c-7-7.1-18.4-7.1-25.5-0.1l-83.9,83.2l-30.7-30.9c-7-7.1-18.4-7.1-25.5-0.1c-7.1,7-7.1,18.4-0.1,25.5
			l43.4,43.7c3.5,3.5,8.1,5.3,12.8,5.3c4.6,0,9.2-1.7,12.7-5.2l96.7-95.9C334.75,235.5,334.75,224.1,327.75,217z"
    />
  </svg>
);

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
          <div
            style={{
              width: '60%',
            }}
          >
            <Title padding="1em 0" size="3.2em">
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {titleIconsTask}
                Track of your tasks
              </span>
            </Title>

            <Container>
              {this.state.optionsVisible ? (
                <CreateBoard
                  toggleOptions={this.toggleOptions}
                  createBoard={this.createBoard}
                />
              ) : (
                <div style={{ width: '100%' }}>
                  <Title padding="1em 0" size="2.4em">
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
          </div>
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
