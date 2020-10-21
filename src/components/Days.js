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
              width="10%"
              addTaskToProgress={this.props.addTaskToProgress}
              board={this.props.board}
              title={day}
              key={day + index}
            >
              <Title size="1.3em">{day}</Title>
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
