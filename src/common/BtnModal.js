import React from 'react';

const btnModalStyles = {
  static: {
    padding: '.4em',
    border: 'none',
    boxShadow: '0 0 .1em #000',
    backgroundColor: '#242424',
    color: '#fff',
    transition: '.25s',
  },

  hover: {
    color: '#000',
  },
};

export default class BtnModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  render() {
    const { arrFunction, style, color, children } = this.props;

    return (
      <button
        onMouseMove={this.startHover}
        onMouseLeave={this.endHover}
        onClick={() => {
          if (arrFunction) arrFunction.forEach((func) => func());
        }}
        style={
          this.state.hover
            ? {
                ...btnModalStyles.static,
                ...btnModalStyles.hover,
                backgroundColor: color,
                ...style,
              }
            : { ...btnModalStyles.static, ...style }
        }
      >
        {children}
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
