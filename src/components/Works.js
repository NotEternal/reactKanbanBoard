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
              width="28%"
              title={stage[0]}
              addTaskToProgress={this.props.addTaskToProgress}
              key={stage[0] + index}
            >
              <Title padding="1rem 0" size="1.4em">
                {stage}
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

export default Works;
