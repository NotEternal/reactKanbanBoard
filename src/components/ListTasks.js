import React from 'react';
import Modal from '../common/Modal';
import BtnModal from '../common/BtnModal';

const taskWrapperStyles = {
  margin: '.5em 0',
  padding: '.4em',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '.3em',
  color: '#000',
};

const btnStyles = {
  padding: '.2em',
  border: 'none',
  fontSize: '1.2em',
  backgroundColor: 'transparent',
  color: '#000',
};

const wrapperModalContentStyles = {
  padding: '1.2em',
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 4em)',
  gridTemplateRows: 'repeat(8, 1fr)',
  fontSize: '1.4em',
  borderRadius: '.4em',
  backgroundColor: '#111',
};

const taskModalFieldStyles = {
  gridColumnStart: '1',
  gridColumnEnd: '7',
  gridRowStart: '2',
  gridRowEnd: '9',
  padding: '.4em',
  resize: 'none',
  borderRadius: '0 0 .3em .3em',
  border: '.1em solid #151515',
  boxShadow: 'inset 0 0 .4em #000',
  backgroundColor: 'transparent',
  color: '#fff',
};

export default class ListTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleTaskModal: false,
      currentTaskText: '',
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.tasks.map((task, index) => {
            return (
              <li
                style={{
                  ...taskWrapperStyles,
                  backgroundColor: this.props.color,
                }}
                key={task + index}
              >
                <span
                  style={{
                    flex: '1',
                    overflow: 'auto',
                  }}
                >
                  {task}
                </span>
                <button onClick={this.toggleVisibleTaskModal} style={btnStyles}>
                  🖉
                </button>
              </li>
            );
          })}
        </ul>

        <Modal visible={this.state.visibleTaskModal}>
          <div style={wrapperModalContentStyles}>
            <BtnModal
              color={this.props.color}
              arrFunction={[this.toggleVisibleTaskModal]}
              style={{
                gridColumnStart: '1',
                gridColumnEnd: '7',
                gridRowStart: '1',
                gridRowEnd: '2',
                borderRadius: '.3em .3em 0 0',
              }}
            >
              Close
            </BtnModal>
            <textarea
              style={taskModalFieldStyles}
              defaultValue={this.state.currentTaskText}
            />
            <div
              style={{
                gridColumnStart: '7',
                gridColumnEnd: '8',
                gridRowStart: '2',
                gridRowEnd: '9',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <BtnModal
                color={this.props.color}
                style={{ borderTopRightRadius: '.3em' }}
              >
                ✔
              </BtnModal>
              <BtnModal
                color={this.props.color}
                style={{ borderBottomRightRadius: '.3em' }}
              >
                ⨯
              </BtnModal>
            </div>
          </div>
        </Modal>
      </div>
    );
  }

  toggleVisibleTaskModal = () => {
    this.setState({
      visibleTaskModal: !this.state.visibleTaskModal,
    });
  };
}
