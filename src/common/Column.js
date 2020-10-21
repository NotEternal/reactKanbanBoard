import React from 'react';

const columnStyles = {
  padding: '1em',
  margin: '1em 1%',
  borderRadius: '.5em',
  backgroundColor: '#111',
  transition: '.25s',
};

export default class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  render() {
    return (
      <div
        onMouseMove={this.startHover}
        onMouseLeave={this.endHover}
        style={
          this.props.active && this.state.hover
            ? {
                ...columnStyles,
                width: this.props.width,
                minWidth: this.props.minWidth,
                transform: 'translateY(-2px)',
                border: `.1em solid ${this.props.borderColor}`,
                boxShadow: '0 .8em .7em #000',
              }
            : this.state.hover
            ? {
                ...columnStyles,
                width: this.props.width,
                minWidth: this.props.minWidth,
                transform: 'translateY(-2px)',
                border: '.1em solid transparent',
                boxShadow: '0 .8em .7em #000',
              }
            : {
                ...columnStyles,
                width: this.props.width,
                minWidth: this.props.minWidth,
                border: '.1em solid transparent',
              }
        }
      >
        {this.props.children}
      </div>
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
