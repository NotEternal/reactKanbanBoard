import React from 'react';

const modalStyles = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  visibility: 'hidden',
  opacity: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  transition: '.2s',
};

export default function Modal({ visible, children }) {
  return (
    <div
      style={
        visible
          ? {
              ...modalStyles,
              visibility: 'visible',
              opacity: '1',
            }
          : modalStyles
      }>
      <div
        style={{
          padding: '1em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '.4em',
          backdropFilter: 'blur(0.3em)',
        }}>
        {children}
      </div>
    </div>
  );
}
