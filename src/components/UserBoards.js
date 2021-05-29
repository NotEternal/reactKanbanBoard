import React from 'react';
import Container from '../common/Container';
import Title from '../common/Title';
import Modal from '../common/Modal';
import BoardOptions from './BoardOptions';
import Board from './Board';
import ListBoards from './ListBoards';
import '../componentStyles/userBoards.css';

export default class UserBoards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destroyMode: false,
      warningVisible: false,
      optionsVisible: false,
    };
  }

  render() {
    const { boards } = this.props;
    const { destroyMode, optionsVisible, warningVisible } = this.state;

    return (
      <section className='user-boards-container'>
        {this.props.board ? (
          <Board {...this.props} backToBoards={this.backToBoards} />
        ) : (
          <div
            style={{
              minWidth: '27em',
              width: '60%',
            }}>
            <Title underline padding='1em 0' size='4em'>
              Track of your tasks
            </Title>

            <Container>
              <div style={{ width: '100%' }}>
                <Title padding='1em 0' size='2.4em'>
                  Your boards
                </Title>
                <ListBoards
                  toggleOptions={this.toggleOptions}
                  toggleDestroyMode={this.toggleDestroyMode}
                  openBoard={this.openBoard}
                  deleteBoard={this.deleteBoard}
                  destroyMode={destroyMode}
                  boards={boards}
                />
              </div>
            </Container>

            {optionsVisible && (
              <Modal visible={optionsVisible}>
                <BoardOptions
                  toggleOptions={this.toggleOptions}
                  toggleModalWorning={this.toggleModalWorning}
                  createBoard={this.createBoard}
                  warningVisible={warningVisible}
                />
              </Modal>
            )}
          </div>
        )}
      </section>
    );
  }

  toggleOptions = () => {
    this.setState((state) => ({
      optionsVisible: !state.optionsVisible,
    }));
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
      this.toggleOptions();
    } else {
      this.toggleModalWorning();
    }
  };

  deleteBoard = (key) => {
    this.props.removeBoard(key);
  };

  toggleDestroyMode = () => {
    this.setState((state) => ({
      destroyMode: !state.destroyMode,
    }));
  };

  openBoard = (index) => {
    this.props.chooseBoard(index);
  };

  backToBoards = () => {
    this.props.chooseBoard(null);
  };

  toggleModalWorning = () => {
    this.setState((state) => ({
      warningVisible: !state.warningVisible,
    }));
  };
}
