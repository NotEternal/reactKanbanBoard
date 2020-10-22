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
      <div
        onMouseMove={this.startHover}
        onMouseLeave={this.endHover}
        style={
          this.state.hover
            ? { ...addTaskStyles, backgroundColor: '#fff' }
            : addTaskStyles
        }
      >
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
              <Button arrFunctions={[this.toggleShowField]}>Add</Button>
              <Button arrFunctions={[this.toggleShowField]}>⨯</Button>
            </div>
          </div>
        ) : (
          <Button arrFunctions={[this.toggleShowField]}>+ Task</Button>
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
