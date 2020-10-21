import React from 'react';
import BoardOptions from './BoardOptions';

const CreateBoardComponentsStyles = {
  createBoard: {
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
};

class CreateBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section style={CreateBoardComponentsStyles.createBoard}>
        <BoardOptions
          toggleOptions={this.props.toggleOptions}
          createBoard={this.props.createBoard}
        />
      </section>
    );
  }
}

export default CreateBoard;
