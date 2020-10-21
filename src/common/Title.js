import React from 'react';

const titleStyles = {
  margin: '0',
  padding: '.8em 0',
  color: '#fff',
};

export default function Title({ size, children }) {
  return <h3 style={{ ...titleStyles, fontSize: size }}>{children}</h3>;
}
