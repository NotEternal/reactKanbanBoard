import React from 'react';
import Button from './Button';

const fieldStyles = {
  resize: 'none',
  width: '100%',
  padding: '.4em',
  border: 'none',
  boxShadow: 'inset 0 0 .2em #111',
  backgroundColor: 'transparent',
};

const btnPlusTaskStyles = {
  display: 'inline-block',
  width: '100%',
  height: '100%',
  padding: '.2em',
  borderRadius: 'inherit',
  border: 'none',
  backgroundColor: 'transparent',
  transition: '.25s',
};

export default class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      showField: false,
      hover: false,
    };
  }

  render() {
    const addTaskStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '.4em',
      backgroundColor: this.props.color,
      transition: '.25s',
    };

    return (
      <div style={addTaskStyles}>
        {this.state.showField ? (
          <div style={{ width: '100%' }}>
            <textarea
              style={fieldStyles}
              onBlur={(event) => {
                this.setTaskText(event.target.value);
              }}
              placeholder="..."
            ></textarea>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                arrFunctions={[
                  () => {
                    if (this.state.text) {
                      this.props.addTask(this.props.place, this.state.text);
                      this.toggleShowField();
                    }
                  },
                  () => this.setTaskText(''),
                ]}
              >
                Add
              </Button>
              <Button arrFunctions={[this.toggleShowField]}>⨯</Button>
            </div>
          </div>
        ) : (
          <button
            onMouseMove={this.startHover}
            onMouseLeave={this.endHover}
            style={btnPlusTaskStyles}
            onClick={this.toggleShowField}
          >
            {/* TODO: add constant for styles */}
            <span
              style={
                this.state.hover
                  ? {
                      display: 'inline-block',
                      transform: 'translateX(-.2em)',
                      transition: '.25s',
                    }
                  : { display: 'inline-block', transition: '.25s' }
              }
            >
              +
            </span>{' '}
            <span
              style={
                this.state.hover
                  ? {
                      display: 'inline-block',
                      transform: 'translateX(.2em)',
                      transition: '.25s',
                    }
                  : { display: 'inline-block', transition: '.25s' }
              }
            >
              Task
            </span>
          </button>
        )}
      </div>
    );
  }

  setTaskText = (text) => {
    this.setState({
      text,
    });
  };

  startHover = () => {
    this.setState({
      hover: true,
    });
  };

  endHover = () => {
    this.setState({
      hover: false,
    });
  };

  toggleShowField = () => {
    this.setState({
      showField: !this.state.showField,
    });
  };
}
