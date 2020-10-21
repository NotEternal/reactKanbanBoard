import React from 'react';

const containerStyles = {
  width: '60%',
  width: '60%',
  padding: '3em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  border: '.1em solid var(--gray)',
  borderRadius: '.4em',
  boxShadow: '0 0 1em var(--black)',
};

export default function Container({ children }) {
  return <div style={containerStyles}>{children}</div>;
}
