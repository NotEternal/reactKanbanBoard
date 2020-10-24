import React from 'react';
import Modal from '../common/Modal';

const dropDownListStyles = {
  width: '96%',
  margin: '.6em',
  borderRadius: '.4em',
};

const toggleBtnStyles = {
  width: '100%',
  marginBottom: '.7em',
  padding: '.6em 1em',
  border: 'none',
  borderRadius: '.4em',
  boxShadow: '0 0 1em #000',
  backgroundColor: 'transparent',
  color: 'inherit',
  transition: '.25s',
};

const listStyles = {
  display: 'none',
};

const itemStyles = {
  margin: '.3em 0',
  padding: '.5em',
  overflow: 'auto',
  borderRadius: '.3em',
  backgroundColor: '#181818',
};

export default class DropDownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listVisible: false,
      // selectedTask: false,
    };
  }

  render() {
    return (
      <div style={dropDownListStyles}>
        <button
          style={
            this.state.listVisible
              ? {
                  ...toggleBtnStyles,
                  backgroundColor: this.props.color,
                  color: '#000',
                }
              : {
                  ...toggleBtnStyles,
                  backgroundColor: '#222',
                  color: '#fff',
                }
          }
          onClick={this.toggleListVisible}
        >
          {this.props.name}
        </button>
        <ul
          style={
            this.state.listVisible
              ? {
                  ...listStyles,
                  display: 'block',
                }
              : listStyles
          }
        >
          {this.props.items.map((item, index) => {
            return (
              <li style={itemStyles} key={item + index}>
                {item}
              </li>
            );
          })}
        </ul>
        {/* TODO: create modal with info about task (time and text) */}
        {/* <Modal visible={this.state.selectedTask}>
          <div></div>
        </Modal> */}
      </div>
    );
  }

  toggleListVisible = () => {
    this.setState({
      listVisible: !this.state.listVisible,
    });
  };
}
