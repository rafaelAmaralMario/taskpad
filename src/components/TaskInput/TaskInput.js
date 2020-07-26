import React, { useRef } from 'react';

import MaterialIcon from '../MateiralIcon/MaterialIcon';

import './TaskInput.scss';

const TaskInput = ({ addItem }) => {
  const inputRef = useRef();

  const onKyePressFunction = (event) => {
    if (event.key === 'Enter') {
      createItem();
      inputRef.current.value = '';
    }
  };

  const createItem = () => {
    if (inputRef.current.value) {
      addItem({
        title : inputRef.current.value,
        id    : new Date().getTime(),
      });
    }
  };

  return (
    <div className='task-input-container'>
      <input
        ref={inputRef}
        type='text'
        name='text-input'
        className='task-input'
        onKeyPress={onKyePressFunction}
        placeholder='Enter your new task'
      />
      <MaterialIcon iconClass='add-icon' onClick={createItem}>
        add
      </MaterialIcon>
    </div>
  );
};

export default TaskInput;
