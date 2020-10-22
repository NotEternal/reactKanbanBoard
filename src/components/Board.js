import React from 'react';
import BtnToggle from '../common/BtnToggle';
import Title from '../common/Title';
import Menu from './Menu';
import Days from './Days';
import Works from './Works';

const headerStyles = {
  position: 'relative',
  zIndex: '3',
  padding: '.5rem 2%',
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.2em',
  borderBottom: '.1em solid #222',
  boxShadow: '0 .5em .5em #000',
  backgroundColor: '#090909',
};

const svgLeftArrow = (
  <svg
    style={{
      width: '1.4rem',
      heigh: '1.4rem',
      marginRight: '.5rem',
      fill: '#fff',
    }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 492 492"
  >
    <path
      d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
   C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
   c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
   l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"
    />
  </svg>
);

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      daysVisible: true,
      menuVisible: false,
    };
  }

  render() {
    return (
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
        }}
      >
        <div style={headerStyles}>
          <BtnToggle arrFunctions={[this.props.backToBoards]}>
            {svgLeftArrow}
            <Title>{this.props.board.title}</Title>
          </BtnToggle>
          <BtnToggle
            arrFunctions={[() => this.setVisibleDays(true)]}
            active={this.state.daysVisible}
          >
            Days
          </BtnToggle>
          <BtnToggle
            arrFunctions={[() => this.setVisibleDays(false)]}
            active={!this.state.daysVisible}
          >
            Works
          </BtnToggle>
          <BtnToggle
            arrFunctions={[this.toggleVisibleMenu]}
            active={this.state.menuVisible}
          >
            ☰
          </BtnToggle>
        </div>

        <Menu visible={this.state.menuVisible} color={this.props.board.color} />

        <div style={{ paddingLeft: '3vw' }}>
          {this.state.daysVisible ? (
            <Days
              addTaskToProgress={this.addTaskToProgress}
              board={this.props.board}
            />
          ) : (
            <Works
              addTaskToProgress={this.addTaskToProgress}
              board={this.props.board}
            />
          )}
        </div>
      </section>
    );
  }

  setVisibleDays = (bool) => {
    this.setState({
      daysVisible: bool,
    });
  };

  toggleVisibleMenu = () => {
    this.setState({
      menuVisible: !this.state.menuVisible,
    });
  };
}
