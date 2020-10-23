import React from 'react';

const columnStyles = {
  padding: '1em',
  margin: '1em 1%',
  borderRadius: '.5em',
  backgroundColor: '#111',
  transition: '.25s',
};

export default class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
    };
  }

  render() {
    return (
      <div
        onMouseMove={this.startHover}
        onMouseLeave={this.endHover}
        style={
          this.props.active
            ? {
                ...columnStyles,
                width: this.props.width,
                minWidth: this.props.minWidth,
                border: `.1em solid ${this.props.borderColor}`,
                boxShadow: '0 .8em .7em #000',
              }
            : {
                ...columnStyles,
                width: this.props.width,
                minWidth: this.props.minWidth,
                border: '.1em solid transparent',
              }
        }
      >
        <button
          onClick={this.toggleHideColumn}
          style={{
            padding: '.2em 0',
            fontSize: '.8em',
            border: 'none',
            backgroundColor: 'transparent',
            color: '#888',
          }}
        >
          {this.state.hide ? 'Show' : 'Hide'}
        </button>
        <div
          style={
            this.state.hide
              ? {
                  height: '0',
                  visibility: 'hidden',
                  opacity: '0',
                  transition: '.15s',
                }
              : { transition: '.15s' }
          }
        >
          {this.props.children}
        </div>
      </div>
    );
  }

  toggleHideColumn = () => {
    this.setState({
      hide: !this.state.hide,
    });
  };
}
