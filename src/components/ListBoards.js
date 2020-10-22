import React from 'react';
import Button from '../common/Button';

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

const boardItemStyles = {
  cursor: 'pointer',
  maxWidth: '20vw',
  margin: '.7em',
  marginLeft: '0',
  padding: '1em',
  overflow: 'auto',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '.3em',
  transition: '.25s',
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
            Created: {this.props.list.length}
          </span>
        </div>

        <ul style={boardsListStyles}>
          {this.props.list.map((item) => {
            return (
              <li
                className={this.props.destroyMode ? 'destroy-item' : ''}
                onClick={() => {
                  this.props.destroyMode
                    ? this.props.removeBoard(item.title + item.color)
                    : this.props.openBoard(item);
                }}
                style={{
                  ...boardItemStyles,
                  border: `.1em solid ${item.color}`,
                }}
                key={item.title + item.color}
              >
                {item.title}
                <span className="color" hidden>
                  {item.color}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
