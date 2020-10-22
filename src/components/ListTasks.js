import React from 'react';
import Modal from '../common/Modal';

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

export default function ListTasks({ color, tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <li
            style={{ ...taskWrapperStyles, backgroundColor: color }}
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
            <button style={btnStyles}>🖉</button>
          </li>
        );
      })}
    </ul>
  );
}
