import React from 'react';

export default function Title({ underline, padding, size, color, children }) {
  return (
    <h3
      style={{
        margin: '0',
        padding: padding || '0',
        fontSize: size || '1em',
        textDecoration: underline && 'underline',
        color: color || '#fff',
      }}>
      {children}
    </h3>
  );
}
