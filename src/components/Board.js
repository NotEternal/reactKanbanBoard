import React from 'react';
import Title from '../common/Title';
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
  width: '1.4rem',
  height: '1.4rem',
  marginRight: '1rem',
  padding: '0',
  border: 'none',
  backgroundColor: 'transparent',
};

const btnToggleSectionStyles = {
  static: {
    width: '50%',
    padding: '1em',
    fontSize: '1.2em',
    border: 'none',
    color: 'inherit',
    borderTop: '.2em solid transparent',
    background: 'transparent',
    transition: '.25s',
  },

  active: {
    transform: 'translateY(.1em)',
  },
};

const svgLeftArrow = (
  <svg
    style={{
      width: '100%',
      heigh: '100%',
      fill: '#fff',
    }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 492 492"
  >
    <path
      d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
   C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
   c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
   l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"
    />
  </svg>
);

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
            {svgLeftArrow}
          </button>
          <Title size="1.8em">{this.props.board.title}</Title>

          <div
            style={{
              flex: '1',
              margin: '0 7% 0 2%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <button
              onClick={() => this.visibleDays(true)}
              style={
                this.state.showDays
                  ? {
                      ...btnToggleSectionStyles.static,
                      ...btnToggleSectionStyles.active,
                      borderTop: `.2em solid ${this.props.board.color}`,
                    }
                  : btnToggleSectionStyles.static
              }
            >
              Days
            </button>
            <button
              onClick={() => this.visibleDays(false)}
              style={
                this.state.showDays
                  ? btnToggleSectionStyles.static
                  : {
                      ...btnToggleSectionStyles.static,
                      ...btnToggleSectionStyles.active,
                      borderTop: `.2em solid ${this.props.board.color}`,
                    }
              }
            >
              Works
            </button>
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
