import React from 'react';
import Column from '../common/Column';
import Title from '../common/Title';
import ListTasks from './ListTasks';
import AddTask from '../common/AddTask/AddTask';

const worksColumnsStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'center',
};

const workStages = ['ToDo', 'Doing', 'Done'];
class Works extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section style={worksColumnsStyles}>
        {workStages.map((stage, index) => {
          return (
            <Column
              minWidth="12em"
              width="30.5%"
              title={stage}
              key={stage + index}
            >
              <Title padding="1rem 0" size="1.4em">
                {stage}
              </Title>

              <ListTasks
                color={this.props.board.color}
                tasks={this.props.board.works[stage]}
                addTaskToCompleted={(taskIndex, task) => {
                  this.props.addTaskToCompleted([
                    'works',
                    stage,
                    taskIndex,
                    task,
                  ]);
                }}
                addTaskToUnfulfilled={(taskIndex, task) => {
                  this.props.addTaskToUnfulfilled([
                    'works',
                    stage,
                    taskIndex,
                    task,
                  ]);
                }}
                changeTask={(taskIndex, newTask) =>
                  this.props.changeTask(['works', stage, taskIndex, newTask])
                }
              />

              <AddTask
                place={stage}
                addTask={this.props.addTaskToStage}
                color={this.props.board.color}
              />
            </Column>
          );
        })}
      </section>
    );
  }
}

export default Works;
