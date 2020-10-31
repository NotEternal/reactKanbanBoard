import React from 'react';

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

export default function Task({
  index,
  task,
  color,
  openTaskModal,
  dragStartHandler,
  dragLeaveHandler,
  dragEndHandler,
  dragOverHandler,
  dropHandler,
}) {
  return (
    <li
      onDragStart={(event) => dragStartHandler(event, [index, task])}
      onDragLeave={(event) => dragLeaveHandler(event)}
      onDragEnd={(event) => dragEndHandler(event)}
      onDragOver={(event) => dragOverHandler(event)}
      onDrop={(event) => dropHandler(event, [index, task])}
      draggable={true}
      style={{
        ...taskWrapperStyles,
        backgroundColor: color,
      }}>
      <span
        style={{
          flex: '1',
          overflowX: 'auto',
          overflowY: 'hidden',
        }}>
        {task}
      </span>
      <button onClick={() => openTaskModal(index, task)} style={btnStyles}>
        🖉
      </button>
    </li>
  );
}
