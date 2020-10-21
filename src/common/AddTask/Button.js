import React from 'react';

const buttonStyle = {
  cursor: 'pointer',
  padding: '.4em',
  border: 'none',
  backgroundColor: 'transparent',
};

export default function Button({ arrFunctions, children }) {
  return (
    <button
      onClick={() => {
        arrFunctions.forEach((func) => func());
      }}
      style={buttonStyle}
    >
      {children}
    </button>
  );
}
