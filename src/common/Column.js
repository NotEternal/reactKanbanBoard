import React from 'react';

const columnStyles = {
  padding: '1em',
  margin: '1em 1%',
  borderRadius: '.5em',
  backgroundColor: '#111',
};

export default function Column({ minWidth, width, children }) {
  return (
    <div style={{ ...columnStyles, width: width, minWidth: minWidth }}>
      {children}
    </div>
  );
}
