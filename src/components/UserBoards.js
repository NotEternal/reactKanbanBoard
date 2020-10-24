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
      width: '1em',
      marginRight: '.6rem',
      fill: '#fff',
    }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 415.998 415.998"
  >
    <circle cx="208.239" cy="48" r="12" />
    <path
      d="M367.998,95.999c0-17.673-14.326-32-31.999-32h-44.424c-5.926-6.583-13.538-11.62-22.284-14.136
			c-7.367-2.118-13.037-7.788-15.156-15.155C248.37,14.663,229.897,0,207.998,0c-21.898,0-40.37,14.663-46.134,34.706
			c-2.122,7.376-7.806,13.039-15.182,15.164c-8.736,2.518-16.341,7.55-22.262,14.129H79.999c-17.674,0-32,14.327-32,32v287.999
			c0,17.673,14.326,32,32,32c73.466,0,163.758,0,256,0c17.674,0,32-14.327,32-32C367.999,293.119,367.998,206.096,367.998,95.999z
			 M128,95.742c0.11-14.066,9.614-26.606,23.112-30.496c12.71-3.662,22.477-13.426,26.127-26.116
			C181.157,25.51,193.805,16,207.998,16c14.194,0,26.842,9.51,30.758,23.13c3.652,12.698,13.413,22.459,26.111,26.11
			c13.618,3.917,23.13,16.566,23.13,30.758v16H128V95.742z M335.999,399.998c-85.455,0-170.77,0-256,0c-8.823,0-16-7.178-16-16
			V95.999c0-8.822,7.177-16,16-16h34.742c-1.73,4.892-2.698,10.143-2.74,15.617v32.383h191.998v-32c0-5.615-0.992-10.991-2.764-16
			h34.764c8.822,0,15.999,7.178,15.999,16c0,45.743-0.001,260.254,0.002,287.999C351.999,392.82,344.822,399.998,335.999,399.998z"
    />
    <polygon points="274.51,194.508 178.343,290.674 135.955,248.286 124.642,259.6 178.343,313.302 285.823,205.822 		" />
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
