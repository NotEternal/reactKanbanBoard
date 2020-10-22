import React from 'react';

const buttonStyle = {
  static: {
    padding: '1em',
    border: 'none',
    borderRadius: '0.4em',
    backgroundColor: '#111',
    color: 'inherit',
    transition: '0.2s',
  },

  hover: {
    transform: 'translateY(-1px)',
    boxShadow: '0 .5em .6em #000',
    backgroundColor: '#222',
  },
};

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  render() {
    return (
      <button
        onMouseMove={this.startHover}
        onMouseLeave={this.endHover}
        onClick={() => {
          this.props.arrFunctions.map((func) => func());
        }}
        style={
          this.props.block
            ? { ...buttonStyle.static, pointerEvents: 'none', opacity: '.4' }
            : this.state.hover
            ? { ...buttonStyle.static, ...buttonStyle.hover }
            : buttonStyle.static
        }
      >
        {this.props.children}
      </button>
    );
  }

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
}
