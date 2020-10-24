import React from 'react';
import DropDownList from '../common/DropDownList';
import Modal from '../common/Modal';
import Button from '../common/Button';

const menuStyles = {
  position: 'fixed',
  zIndex: '2',
  top: '0',
  left: '-100%',
  height: '100%',
  padding: '2.5rem',
  paddingTop: '7em',
  boxShadow: '0 0 .8em #000',
  backgroundColor: '#090909',
  transition: '.3s',
};

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTask: null,
    };
  }

  render() {
    return (
      <>
        <section
          style={this.props.visible ? { ...menuStyles, left: '0' } : menuStyles}
        >
          <DropDownList
            name="Completed tasks"
            color={this.props.color}
            listTask={this.props.board.completedTasks}
            toggleTaskModal={this.toggleTaskModal}
          />
          <DropDownList
            name="Unfulfilled tasks"
            color={this.props.color}
            listTask={this.props.board.unfulfilledTasks}
            toggleTaskModal={this.toggleTaskModal}
          />
        </section>

        <Modal visible={this.state.selectedTask}>
          <div
            style={{
              padding: '2em',
              borderRadius: '.3em',
              backgroundColor: '#080808',
            }}
          >
            <Button arrFunctions={[() => this.toggleTaskModal(null)]}>
              Close
            </Button>
            <div
              style={{ padding: '2em 0 .4em', borderBottom: '.1em solid #222' }}
            >
              {/*taskItem[1] - full date now */}
              {this.state.selectedTask ? this.state.selectedTask[1] : ''}
            </div>
            <div
              style={{ padding: '2em 0 .4em', borderBottom: '.1em solid #222' }}
            >
              {/* taskItem[0] - text */}
              {this.state.selectedTask ? this.state.selectedTask[0] : ''}
            </div>
          </div>
        </Modal>
      </>
    );
  }

  toggleTaskModal = (taskItem) => {
    this.setState({
      selectedTask: taskItem,
    });
  };
}
