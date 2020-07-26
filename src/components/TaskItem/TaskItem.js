import React, { useState, useRef } from 'react';
import classnames from 'classnames'

import MaterialIcon from '../MateiralIcon/MaterialIcon';

import './TaskItem.scss';

const TaskItem = ({ task, idx, setTaskList, totalItems, saveState }) => {
  const [
    isEditing,
    setEditing,
  ] = useState(false);

  const editRef = useRef();

  const changeTaskStatus = (status, { selectedTask }) => {
    setTaskList((prevTaskList) => {
      const newList = prevTaskList.map((task) => {
        if (task.id === selectedTask.id) {
          task.status = status;
        }
        return task;
      });
      saveState(newList);
      return newList;
    });
  };

  const removeFunction = ({ selectedTask }) => {
    setTaskList((prevTaskList) => {
      const newList = prevTaskList.filter((task) => task.id !== selectedTask.id);
      saveState(newList);
      return newList;
    });
  };

  const MoveTask = (direction, { idx }) => {
    setTaskList((prevList) => {
      const newTaskList = prevList.slice();
      const removedTask = newTaskList.splice(idx, 1)[0];
      if (direction === 'UP') {
        newTaskList.splice(idx - 1, 0, removedTask);
      } else {
        newTaskList.splice(idx + 1, 0, removedTask);
      }

      saveState(newTaskList);
      return newTaskList;
    });
  };

  const editTitle = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const onKyePressFunction = (selectedTask, event) => {
    if (event.key === 'Enter') {
      handleConfirm({ selectedTask });
    }
  };

  const handleConfirm = ({ selectedTask }) => {
    const newTitle = editRef.current.value;
    if (newTitle) {
      setTaskList((prevTaskList) =>
        prevTaskList.map((task) => {
          if (task.id === selectedTask.id) {
            task.title = newTitle;
          }
          return task;
        })
      );
      saveState();
      setEditing(false);
    }
  };

  const iconsList = [
    {
      name      : 'arrow_circle_up',
      className : 'task-up',
      action    : MoveTask.bind(null, 'UP'),
      show      : ({ idx }) => idx > 0 && !isEditing,
    },
    {
      name      : 'arrow_circle_down',
      className : 'task-down',
      action    : MoveTask.bind(null, 'DOWN'),
      show      : ({ idx }) => idx < totalItems - 1 && !isEditing,
    },
    {
      name      : 'edit',
      className : 'edit-task',
      action    : editTitle,
      show      : ({ task }) => task.status !== 'done' && !isEditing,
    },
    {
      name      : 'done',
      className : 'task-done',
      action    : changeTaskStatus.bind(null, 'done'),
      show      : ({ task }) => task.status !== 'done' && !isEditing,
    },
    {
      name      : 'remove',
      className : 'task-remove',
      action    : removeFunction,
      show      : () => !isEditing,
    },
    {
      name      : 'cancel',
      className : 'task-remove',
      action    : handleCancel,
      show      : () => isEditing,
    },
    {
      name      : 'edit',
      className : 'task-done',
      action    : handleConfirm,
      show      : () => isEditing,
    },
  ];

  return (
    <div className={classnames( 'task-item'  ,{ 'task-concluded' : task.status === 'done' })   }>
      <div className='task-informations'>
        {
          isEditing ? <input
            ref={editRef}
            className='task-input'
            type='text'
            onKeyPress={onKyePressFunction.bind(null, task)}
            defaultValue={task.title}
            placeholder={task.title}
          /> :
          <span className='task-title'>{task.title}</span>}
      </div>
      <div className='task-actions'>
        {iconsList.map(
          (icon, idxIcon) =>

              (icon.show && icon.show({ task, idx })) || !icon.show ? <MaterialIcon
                key={idxIcon}
                iconClass={icon.className}
                onClick={icon.action.bind(null, { selectedTask: task, idx })}>
                {icon.name}
              </MaterialIcon> :
              null
        )}
      </div>
    </div>
  );
};

export default TaskItem;
