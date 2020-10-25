import React from 'react';
import Column from '../common/Column';
import Title from '../common/Title';
import ListTasks from './ListTasks';
import AddTask from '../common/AddTask/AddTask';

const daysColumnsStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'center',
};

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
export default class Days extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section style={daysColumnsStyles}>
        {daysOfWeek.map((day, index) => {
          return (
            <Column
              minWidth="12em"
              width="12%"
              active={new Date().getDay() - 1 === index}
              borderColor={this.props.board.color}
              title={day}
              key={day + index}
            >
              <Title padding="1rem 0" size="1.4em">
                {day}
              </Title>

              <ListTasks
                color={this.props.board.color}
                tasks={this.props.board.days[day]}
                addTaskToCompleted={(taskIndex, task) => {
                  this.props.addTaskToCompleted(['days', day, taskIndex, task]);
                }}
                addTaskToUnfulfilled={(taskIndex, task) => {
                  this.props.addTaskToUnfulfilled([
                    'days',
                    day,
                    taskIndex,
                    task,
                  ]);
                }}
                updateTaskOrderInColumn={this.props.updateTaskOrderInColumn}
                changeTask={(taskIndex, newTask) =>
                  this.props.changeTask(['days', day, taskIndex, newTask])
                }
              />

              <AddTask
                place={day}
                addTask={this.props.addTaskToDay}
                color={this.props.board.color}
              />
            </Column>
          );
        })}
      </section>
    );
  }
}
