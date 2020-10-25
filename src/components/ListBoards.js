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
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div style={listHeaderStyles}>
          <div
            style={{
              width: '11em',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            <Button
              block={this.props.destroyMode}
              arrFunctions={[this.props.toggleOptions]}
            >
              Add
            </Button>
            <Button arrFunctions={[this.props.toggleDestroyMode]}>
              Delete
            </Button>
          </div>
          <span style={{ flex: '1', textAlign: 'right', fontSize: '1.2em' }}>
            Created: {this.props.boards.length}
          </span>
        </div>

        <ul style={boardsListStyles}>
          {this.props.boards.map((item, index) => {
            return (
              <BoardItem
                item={item}
                index={index}
                openBoard={this.props.openBoard}
                deleteBoard={this.props.deleteBoard}
                destroyMode={this.props.destroyMode}
                key={item.title + item.color}
              ></BoardItem>
            );
          })}
        </ul>
      </section>
    );
  }
}
