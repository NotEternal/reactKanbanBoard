import React from 'react';
import Modal from '../common/Modal';
import BtnModal from '../common/BtnModal';

const taskWrapperStyles = {
  cursor: 'grab',
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
      currentIndex: null,
      currentText: '',
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.tasks.map((task, index) => {
            return (
              // TODO: create new Component
              <li
                onDragStart={(event) =>
                  this.dragStartHandler(event, [index, task])
                }
                onDragLeave={(event) => this.dragLeaveHandler(event)}
                onDragEnd={(event) => this.dragEndHandler(event)}
                onDragOver={(event) => this.dragOverHandler(event)}
                onDrop={(event) => this.dropHandler(event, [index, task])}
                draggable={true}
                style={{
                  ...taskWrapperStyles,
                  backgroundColor: this.props.color,
                }}
                key={task + index}
              >
                <span
                  style={{
                    flex: '1',
                    overflowX: 'auto',
                    overflowY: 'hidden',
                  }}
                >
                  {task}
                </span>
                <button
                  onClick={() => this.openTaskModal(index, task)}
                  style={btnStyles}
                >
                  🖉
                </button>
              </li>
            );
          })}
        </ul>

        <Modal visible={this.state.visibleTaskModal}>
          <div style={wrapperModalContentStyles}>
            <BtnModal
              arrFunctions={[this.closeTaskModal]}
              color={this.props.color}
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
              value={this.state.currentText}
              onChange={(event) =>
                this.changeCurrentTaskText(event.target.value)
              }
              onBlur={(event) => {
                this.props.changeTask(
                  this.state.currentIndex,
                  event.target.value
                );
              }}
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
                arrFunctions={[
                  this.closeTaskModal,
                  () =>
                    this.props.addTaskToCompleted(
                      this.state.currentIndex,
                      this.state.currentText
                    ),
                ]}
              >
                ✔
              </BtnModal>
              <BtnModal
                color={this.props.color}
                style={{ borderBottomRightRadius: '.3em' }}
                arrFunctions={[
                  this.closeTaskModal,
                  () =>
                    this.props.addTaskToUnfulfilled(
                      this.state.currentIndex,
                      this.state.currentText
                    ),
                ]}
              >
                ⨯
              </BtnModal>
            </div>
          </div>
        </Modal>
      </div>
    );
  }

  changeCurrentTaskText = (text) => {
    this.setState({
      currentText: text,
    });
  };

  // TODO: ----------------------------------
  /**
   * @param  {event object} event
   * @param  {array [taskIndex, taskText]} taskArr
   */
  dragStartHandler = (event, taskArr) => {
    //
  };

  dragLeaveHandler = (event) => {
    //
  };

  dragEndHandler = (event) => {
    event.target.style.opacity = '1';
    console.log(event);
  };

  dragOverHandler = (event) => {
    event.preventDefault();
    event.target.style.opacity = '.6';
  };

  /**
   * @param  {event object} event
   * @param  {array [taskIndex, taskText]} taskArr
   */
  dropHandler = (event, taskArr) => {
    event.preventDefault();
    console.log(event.target);
    // * event.target <- drop task
    // * task <- upper task
    // this.props.updateTaskOrderInColumn()
  };
  // TODO: ----------------------------------

  openTaskModal = (index, taskText) => {
    this.setState({
      visibleTaskModal: true,
      currentIndex: index,
      currentText: taskText,
    });
  };

  closeTaskModal = () => {
    this.setState({
      visibleTaskModal: false,
      currentTaskArr: [],
    });
  };
}
