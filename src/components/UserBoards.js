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
    const { boards, board } = this.props;
    const { destroyMode, optionsVisible, warningVisible } = this.state;
    const haveBoard = board?.created;

    return (
      <section className='user-boards-container'>
        {haveBoard ? (
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
                  toggleModalWarning={this.toggleModalWarning}
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
    const { boards, addBoard } = this.props;
    let coincidence = false;

    boards.forEach((board) => {
      if (board.title === newBoard.title && board.color === newBoard.color) {
        coincidence = true;
      }
    });

    if (!coincidence) {
      addBoard(newBoard);
      this.toggleOptions();
    } else {
      this.toggleModalWarning();
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

  toggleModalWarning = () => {
    this.setState((state) => ({
      warningVisible: !state.warningVisible,
    }));
  };
}
