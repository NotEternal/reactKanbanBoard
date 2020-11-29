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
    backgroundColor: '#282828',
  },
};

export default function BtnToggle(props) {
  const { arrFunctions, active, children } = props;

  return (
    <button
      onClick={() => {
        if (arrFunctions) {
          arrFunctions.forEach((func) => func());
        }
      }}
      style={
        active
          ? { ...btnToggleStyles.static, ...btnToggleStyles.active }
          : btnToggleStyles.static
      }>
      {children}
    </button>
  );
}
