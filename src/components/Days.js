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
  render() {
    const {
      board,
      addTaskToCompleted,
      addTaskToUnfulfilled,
      updateTaskOrderInColumn,
      changeTask,
      addTaskToDay,
    } = this.props;

    return (
      <section style={daysColumnsStyles}>
        {daysOfWeek.map((day, index) => {
          return (
            <Column
              minWidth='12em'
              width='12%'
              active={new Date().getDay() - 1 === index}
              borderColor={board.color}
              title={day}
              key={day + index}>
              <Title padding='1rem 0' size='1.4em'>
                {day}
              </Title>

              <ListTasks
                color={board.color}
                tasks={board.days[day]}
                addTaskToCompleted={(taskIndex, task) => {
                  addTaskToCompleted(['days', day, taskIndex, task]);
                }}
                addTaskToUnfulfilled={(taskIndex, task) => {
                  addTaskToUnfulfilled(['days', day, taskIndex, task]);
                }}
                updateTaskOrderInColumn={updateTaskOrderInColumn}
                changeTask={(taskIndex, newTask) =>
                  changeTask(['days', day, taskIndex, newTask])
                }
              />

              <AddTask place={day} addTask={addTaskToDay} color={board.color} />
            </Column>
          );
        })}
      </section>
    );
  }
}
