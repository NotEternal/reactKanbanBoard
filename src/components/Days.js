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
              addTaskToProgress={this.props.addTaskToProgress}
              active={new Date().getDay() - 1 === index}
              borderColor={this.props.board.color}
              title={day}
              key={day + index}
            >
              <Title padding="1rem 0" size="1.4em">
                {day}
              </Title>
              {/* TODO: list task from Redux state */}
              <ListTasks tasks={[]} />
              <AddTask color={this.props.board.color} />
            </Column>
          );
        })}
      </section>
    );
  }
}
