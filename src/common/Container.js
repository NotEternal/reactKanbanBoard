import React from 'react';

const containerStyles = {
  minHeight: '50vh',
  padding: '3em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  border: '.1em solid #222',
  borderRadius: '.4em',
  boxShadow: '0 .3em 1em #000',
  background: '#030303',
};

export default function Container({ children }) {
  return <div style={containerStyles}>{children}</div>;
}
