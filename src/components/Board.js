import React from 'react';
import Title from '../common/Title';
import Button from '../common/Button';
import Sidebar from './Sidebar';
import Days from './Days';
import Works from './Works';

const headerStyles = {
  position: 'relative',
  zIndex: '3',
  paddingLeft: '2em',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '.1em solid #222',
  boxShadow: '0 1em 1em #000',
  backgroundColor: '#090909',
};

const btnAllBoardsStyles = {
  padding: '0',
  fontSize: '3em',
  border: 'none',
  color: 'inherit',
  backgroundColor: 'transparent',
};

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDays: true,
    };
  }

  render() {
    return (
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
        }}
      >
        <div style={headerStyles}>
          <button onClick={this.props.backToBoards} style={btnAllBoardsStyles}>
            ⮈
          </button>
          <Title size="2em">{this.props.board.title}</Title>

          <div
            style={{
              width: '11em',
              marginLeft: '4%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button arrFunctions={[() => this.visibleDays(true)]}>Days</Button>
            <Button arrFunctions={[() => this.visibleDays(false)]}>
              Works
            </Button>
          </div>
        </div>

        <Sidebar color={this.props.board.color} />

        <div style={{ paddingLeft: '3vw' }}>
          {this.state.showDays ? (
            <Days
              addTaskToProgress={this.addTaskToProgress}
              board={this.props.board}
            />
          ) : (
            <Works
              addTaskToProgress={this.addTaskToProgress}
              board={this.props.board}
            />
          )}
        </div>
      </section>
    );
  }

  visibleDays = (bool) => {
    this.setState({
      showDays: bool,
    });
  };

  addTaskToProgress = (list, task) => {
    if (list === 'completed') {
      this.setState({
        completedTask: [...this.state.completedTask, task],
      });
    } else if (list === 'unfulfilled') {
      this.setState({
        unfulfilledTask: [...this.state.unfulfilledTask, task],
      });
    }
  };
}
