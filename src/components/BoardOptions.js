import React from 'react';
import Color from '../common/Color';
import Button from '../common/Button';

const optionsContainerStyles = {
  maxWidth: '27em',
  padding: '2em',
  fontSize: '1.2em',
  borderRadius: '0.4em',
  border: '0.1em solid #555',
  transition: '0.2s',
};

const inputStyles = {
  static: {
    width: '100%',
    marginTop: '1em',
    padding: '.6em',
    border: '.1em solid transparent',
    borderRadius: '.4em',
    backgroundColor: '#111',
    color: '#fff',
    transition: '.1s',
  },

  focus: {
    boxShadow: '0 .3em .4em #000',
    border: '.1em solid #555',
  },
};

const colorsContainer = {
  width: '100%',
  margin: '1.4em 0',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  border: '.1em solid #222',
  borderRadius: '0.4em',
};

const colors = [
  '#6f3e9e',
  '#fc6456',
  '#54f057',
  '#567afc',
  '#fffc31',
  '#fcb156',
  '#3ce8df',
  '#f0549f',
  '#fefefe',
  '#1e5dfc',
  '#787878',
  '#afe854',
];

export default class BoardOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: {
        title: 'Untitled',
        color: '#fcb156',
        completedTasks: [],
        unfulfilledTasks: [],
        days: [],
        works: [],
      },
      inputFocus: false,
    };
  }

  render() {
    return (
      <div style={optionsContainerStyles}>
        <input
          style={
            this.state.inputFocus
              ? { ...inputStyles.static, ...inputStyles.focus }
              : inputStyles.static
          }
          onFocus={this.startInputFocus}
          onBlur={(event) => {
            this.endInputFocus();
            event.target.value
              ? this.setTitle(event.target.value)
              : this.setTitle('Untitled');
          }}
          placeholder="Write board name"
        ></input>

        <div style={colorsContainer}>
          {colors.map((color, index) => {
            return (
              <Color
                color={color}
                setColor={this.setColor}
                key={color + index}
              />
            );
          })}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div
            style={{
              marginRight: '5%',
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1em',
            }}
          >
            Color:{' '}
            <span
              style={{
                display: 'inline-block',
                width: '.9em',
                height: '.9em',
                marginLeft: '.6em',
                borderRadius: '50%',
                backgroundColor: this.state.board.color,
              }}
            ></span>
          </div>
          <div style={{ overflow: 'auto' }}>
            Title: {this.state.board.title}
          </div>
        </div>

        <div
          style={{
            marginTop: '.5em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Button
            arrFunctions={[
              this.props.toggleOptions,
              () => this.props.createBoard(this.state.board),
            ]}
          >
            Create
          </Button>
          <Button arrFunctions={[this.props.toggleOptions]}>Close</Button>
        </div>
      </div>
    );
  }

  setColor = (color) => {
    this.setState({
      board: { ...this.state.board, color: color },
    });
  };

  setTitle = (title) => {
    this.setState({
      board: { ...this.state.board, title: title },
    });
  };

  startInputFocus = () => {
    this.setState({
      inputFocus: true,
    });
  };

  endInputFocus = () => {
    this.setState({
      inputFocus: false,
    });
  };
}
