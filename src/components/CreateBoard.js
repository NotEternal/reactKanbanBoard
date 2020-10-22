import React from 'react';
import BoardOptions from './BoardOptions';

const createBoardStyles ={
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
  },

export default class CreateBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section style={createBoardStyles}>
        <BoardOptions
          toggleOptions={this.props.toggleOptions}
          createBoard={this.props.createBoard}
        />
      </section>
    );
  }
}
