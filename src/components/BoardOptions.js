import React from 'react';
import Color from '../common/Color';
import Button from '../common/Button';

const optionsContainerStyles = {
  maxWidth: '27em',
  padding: '2em',
  fontSize: '1.2em',
  borderRadius: '0.4em',
  border: '0.1em solid var(--gray)',
  transition: '0.2s',
};

const inputStyles = {
  width: '100%',
  marginTop: '1em',
  padding: '.6em',
  border: 'none',
  borderRadius: '.4em',
  backgroundColor: '#111',
  color: '#fff',
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

class BoardOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Untitled',
      color: '#fcb156',
    };
  }

  render() {
    return (
      <div style={optionsContainerStyles}>
        <Button arrFunctions={[this.props.toggleOptions]}>Close</Button>

        <input
          style={inputStyles}
          onBlur={(event) => {
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

        <div>Title: {this.state.title}</div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginBottom: '1em' }}
        >
          Color:{' '}
          <span
            style={{
              display: 'inline-block',
              width: '.9em',
              height: '.9em',
              marginLeft: '.6em',
              borderRadius: '50%',
              backgroundColor: this.state.color,
            }}
          ></span>
        </div>

        <Button
          arrFunctions={[
            this.props.toggleOptions,
            () => this.props.createBoard(this.state),
          ]}
        >
          Create
        </Button>
      </div>
    );
  }

  setColor = (color) => {
    this.setState({
      color: color,
    });
  };

  setTitle = (title) => {
    this.setState({
      title: title,
    });
  };
}

export default BoardOptions;
