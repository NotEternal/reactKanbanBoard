import React from 'react';

const btnToggleStyles = {
  static: {
    margin: '0 .5rem',
    padding: '1rem 1.4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    color: 'inherit',
    borderRadius: '.3em',
    backgroundColor: '#111',
    transition: '.25s',
  },

  active: {
    backgroundColor: '#252525',
  },
};

export default class BtnToggle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={() => {
          if (this.props.arrFunctions) {
            this.props.arrFunctions.forEach((func) => func());
          }
        }}
        style={
          this.props.active
            ? { ...btnToggleStyles.static, ...btnToggleStyles.active }
            : btnToggleStyles.static
        }
      >
        {this.props.children}
      </button>
    );
  }
}
