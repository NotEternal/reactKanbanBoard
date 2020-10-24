import React from 'react';

const dropDownListStyles = {
  width: '100%',
  margin: '.6em',
  borderRadius: '.3em',
};

const toggleBtnStyles = {
  width: '100%',
  marginBottom: '.7em',
  padding: '.6em 1em',
  border: 'none',
  borderRadius: '.3em',
  boxShadow: '0 0 1em #000',
  backgroundColor: 'transparent',
  color: 'inherit',
  transition: '.25s',
};

const listStyles = {
  display: 'none',
};

const itemStyles = {
  display: 'flex',
  alignItems: 'center',
  margin: '.3em 0',
  padding: '.5em',
  overflow: 'auto',
  borderRadius: '.3em',
  backgroundColor: '#181818',
};

const magnifierIcon = (
  <svg
    style={{
      width: '.9em',
      height: '.9em',
      fill: '#fff',
    }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 512.005 512.005"
  >
    <path
      d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
			S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
			c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
			 M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"
    />
  </svg>
);

export default class DropDownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listVisible: false,
    };
  }

  render() {
    return (
      <div style={dropDownListStyles}>
        <button
          style={
            this.state.listVisible
              ? {
                  ...toggleBtnStyles,
                  backgroundColor: this.props.color,
                  color: '#000',
                }
              : {
                  ...toggleBtnStyles,
                  backgroundColor: '#222',
                  color: '#fff',
                }
          }
          onClick={this.toggleListVisible}
        >
          {this.props.name}
        </button>
        <ul
          style={
            this.state.listVisible
              ? {
                  ...listStyles,
                  display: 'block',
                }
              : listStyles
          }
        >
          {/* taskItem[0] - text, taskItem[1] - full date now */}
          {this.props.listTask.map((taskItem) => {
            return (
              <li style={itemStyles} key={taskItem[0] + taskItem[1]}>
                <span style={{ flex: '1' }}>{taskItem[0]}</span>
                <span
                  onClick={() => this.props.toggleTaskModal(taskItem)}
                  style={{ cursor: 'pointer' }}
                >
                  {magnifierIcon}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  toggleListVisible = () => {
    this.setState({
      listVisible: !this.state.listVisible,
    });
  };
}
