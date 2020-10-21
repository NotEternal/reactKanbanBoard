import React from 'react';

export default class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  render() {
    const colorStyles = {
      display: 'inline-block',
      width: '3em',
      height: '3em',
      margin: '.3em',
      border: 'none',
      borderRadius: '.3em',
      backgroundColor: this.props.color,
      transition: '.25s',
    };

    return (
      <button
        onMouseMove={this.startHover}
        onMouseLeave={this.endHover}
        onClick={() => {
          this.props.setColor(this.props.color);
        }}
        style={
          this.state.hover
            ? {
                ...colorStyles,
                transform: 'rotate(12deg) scale(0.9)',
              }
            : colorStyles
        }
      ></button>
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
