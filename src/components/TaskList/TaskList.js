import React from 'react';

import TaskItem from '../TaskItem/TaskItem';

import './TaskList.scss';

export const TaskList = ({ taskList, setTaskList, saveState }) => {
  if (!taskList.length) {
    return null;
  }

  return (
    <div className='task-list'>
      {taskList.map((task, idx) => (
        <TaskItem
          saveState={saveState}
          key={idx}
          task={task}
          idx={idx}
          setTaskList={setTaskList}
          totalItems={taskList.length}
        />
      ))}
    </div>
  );
};

export default TaskList;
