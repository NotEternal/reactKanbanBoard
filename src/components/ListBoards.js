import React from 'react';
import Button from '../common/Button';
import BoardItem from '../common/BoardItem';

const listHeaderStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
};

const boardsListStyles = {
  margin: '1em 0',
  display: 'flex',
  flexWrap: 'wrap',
};

export default class ListBoards extends React.Component {
  render() {
    const {
      destroyMode,
      toggleOptions,
      toggleDestroyMode,
      openBoard,
      deleteBoard,
      boards = [],
    } = this.props;

    return (
      <section>
        <div style={listHeaderStyles}>
          <div
            style={{
              width: '11em',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            <Button block={destroyMode} arrFunctions={[toggleOptions]}>
              Add
            </Button>
            <Button arrFunctions={[toggleDestroyMode]}>Delete</Button>
          </div>
          <span style={{ flex: '1', textAlign: 'right', fontSize: '1.2em' }}>
            Created: {boards.length}
          </span>
        </div>

        <ul style={boardsListStyles}>
          {boards.map((item, index) => {
            return (
              <BoardItem
                item={item}
                index={index}
                openBoard={openBoard}
                deleteBoard={deleteBoard}
                destroyMode={destroyMode}
                key={item.title + item.color}></BoardItem>
            );
          })}
        </ul>
      </section>
    );
  }
}
