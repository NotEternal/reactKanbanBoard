import React from 'react';
import DropDownList from '../common/DropDownList';

const sidebarStyles = {
  position: 'fixed',
  top: '0',
  left: '-38vw',
  width: '40vw',
  height: '100%',
  padding: '2em',
  paddingTop: '7em',
  borderRight: '.1em solid #222',
  boxShadow: '.5em 0 1em #000',
  backgroundColor: '#090909',
  transition: '.25s',
};

const toggleSidebarStyles = {
  position: 'absolute',
  top: '7em',
  right: '.35em',
  width: '1.5em',
  height: '1.5em',
  border: 'none',
  borderRadius: '50%',
  backgroundColor: '#333',
  transition: '.25s',
};

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarVisible: false,
    };
  }

  render() {
    return (
      <section
        style={
          this.state.sidebarVisible
            ? { ...sidebarStyles, left: '0' }
            : sidebarStyles
        }
      >
        <button
          onClick={this.toggleSidebarVisible}
          style={
            this.state.sidebarVisible
              ? { ...toggleSidebarStyles, backgroundColor: this.props.color }
              : toggleSidebarStyles
          }
        ></button>

        <DropDownList
          name="Completed tasks"
          color={this.props.color}
          // TODO: adding here list from Redux state
          items={[]}
        />
        <DropDownList
          name="Unfulfilled tasks"
          color={this.props.color}
          // TODO: adding here list from Redux state
          items={[]}
        />
      </section>
    );
  }

  toggleSidebarVisible = () => {
    this.setState({
      sidebarVisible: !this.state.sidebarVisible,
    });
  };
}
