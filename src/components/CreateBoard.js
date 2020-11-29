import React from 'react';
import BoardOptions from './BoardOptions';

const createBoardStyles = {
  position: 'absolute',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'var(--dark)',
};

export default function CreateBoard(props) {
  const { toggleOptions, createBoard } = props;

  return (
    <section style={createBoardStyles}>
      <BoardOptions toggleOptions={toggleOptions} createBoard={createBoard} />
    </section>
  );
}
