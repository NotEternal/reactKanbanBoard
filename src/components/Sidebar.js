import React from 'react';
import DropDownList from '../common/DropDownList';

const sidebarStyles = {
  position: 'fixed',
  zIndex: '2',
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
  top: '6em',
  right: '0',
  padding: '.5em',
  border: 'none',
  backgroundColor: 'transparent',
  transition: '.25s',
};

const svaRightArrow = (
  <svg
    style={{
      width: '1.1em',
      height: '1.1em',
      fill: '#fff',
    }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 492.004 492.004"
  >
    <path
      d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
    />
  </svg>
);

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
              ? { ...toggleSidebarStyles, transform: 'rotate(180deg)' }
              : toggleSidebarStyles
          }
        >
          {svaRightArrow}
        </button>

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
