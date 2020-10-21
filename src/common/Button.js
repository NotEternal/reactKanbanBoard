import React from 'react';

const buttonStyle = {
  padding: '1em',
  border: 'none',
  borderRadius: '0.4em',
  backgroundColor: '#232323',
  color: 'inherit',
  transition: '0.2s',
};

export default function Button({ arrFunctions, block, children }) {
  return (
    <button
      onClick={() => {
        arrFunctions.map((func) => func());
      }}
      style={
        block
          ? { ...buttonStyle, pointerEvents: 'none', opacity: '.5' }
          : buttonStyle
      }
    >
      {children}
    </button>
  );
}
