import React from 'react';
import DropDownList from '../common/DropDownList';

const menuStyles = {
  position: 'fixed',
  zIndex: '2',
  top: '0',
  left: '-100%',
  height: '100%',
  padding: '3rem',
  paddingTop: '8em',
  boxShadow: '0 0 1em #000',
  backgroundColor: '#090909',
  transition: '.3s',
};

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section
        style={this.props.visible ? { ...menuStyles, left: '0' } : menuStyles}
      >
        <DropDownList
          name="Completed tasks"
          color={this.props.color}
          items={this.props.board.completedTasks}
        />
        <DropDownList
          name="Unfulfilled tasks"
          color={this.props.color}
          items={this.props.board.unfulfilledTasks}
        />
      </section>
    );
  }
}
