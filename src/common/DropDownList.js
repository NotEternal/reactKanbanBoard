import React from 'react';

const toggleBtnStyles = {
  width: '100%',
  marginBottom: '1em',
  padding: '.6em 1em',
  border: 'none',
  borderRadius: '.4em',
  backgroundColor: 'transparent',
  color: 'inherit',
  transition: '.25s',
};

const listStyles = {
  marginBottom: '1em',
  visibility: 'hidden',
  opacity: '0',
  transition: '.25s',
};

const itemStyles = {
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
      <div style={{ width: '96%' }}>
        <button
          style={
            this.state.listVisible
              ? {
                  ...toggleBtnStyles,
                  border: `.1em solid transparent`,
                  backgroundColor: this.props.color,
                  color: '#000',
                }
              : {
                  ...toggleBtnStyles,
                  border: `.1em solid ${this.props.color}`,
                  backgroundColor: 'transparent',
                  color: this.props.color,
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
                  visibility: 'visible',
                  opacity: '1',
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
