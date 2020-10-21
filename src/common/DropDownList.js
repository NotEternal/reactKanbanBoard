import React from 'react';

const dropDownListStyles = {
  width: '96%',
  margin: '.6em',
  borderRadius: '.4em',
};

const toggleBtnStyles = {
  width: '100%',
  marginBottom: '1em',
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
  padding: '.3em',
  borderRadius: '.2em',
  border: '.1em solid #444',
};

export default class DropDownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listVisible: false,
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
          {this.props.items.map((item) => {
            return <li style={itemStyles}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }

  toggleListVisible = () => {
    this.setState({
      listVisible: !this.state.listVisible,
    });
  };
}
