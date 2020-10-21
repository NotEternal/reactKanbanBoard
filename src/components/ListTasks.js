import React from 'react';

const taskWrapperStyles = {
  display: 'flex',
  alignItems: 'center',
};

const btnStyles = {
  padding: '.2em',
  border: 'none',
  color: '#fff',
  backgroundColor: 'transparent',
};

export default function ListTasks({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <li style={taskWrapperStyles} key={task + index}>
            <span
              style={{
                flex: '1',
                overflow: 'auto',
              }}
            >
              {task}
            </span>
            <button style={btnStyles}>🔍</button>
            <button style={btnStyles}>✔</button>
            <button style={btnStyles}>⨯</button>
          </li>
        );
      })}
    </ul>
  );
}
