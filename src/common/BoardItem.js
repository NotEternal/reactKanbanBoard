import React from 'react';

const boardItemStyles = {
  static: {
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
  },

  hover: {
    color: '#000',
  },
};

export default class BoardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardItemHover: false,
    };
  }

  render() {
    return (
      <li
        onMouseEnter={this.startItemHover}
        onMouseLeave={this.endItemHover}
        className={this.props.destroyMode ? 'destroy-item' : ''}
        onClick={() => {
          this.props.destroyMode
            ? this.props.deleteBoard(
                this.props.item.title + this.props.item.color
              )
            : this.props.openBoard(this.props.index);
        }}
        style={
          this.state.boardItemHover
            ? {
                ...boardItemStyles.static,
                ...boardItemStyles.hover,
                transform: 'translateY(-2px)',
                border: `.1em solid ${this.props.item.color}`,
                backgroundColor: this.props.item.color,
              }
            : {
                ...boardItemStyles.static,
                border: `.1em solid ${this.props.item.color}`,
              }
        }
      >
        {this.props.item.title}
        <span className="color" hidden>
          {this.props.item.color}
        </span>
      </li>
    );
  }

  startItemHover = () => {
    this.setState({
      boardItemHover: true,
    });
  };

  endItemHover = () => {
    this.setState({
      boardItemHover: false,
    });
  };
}
