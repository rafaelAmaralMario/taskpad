import React, { Fragment } from 'react';

import { TaskList, Error, TaskInput } from '../../components';

const TasksPage = ({ errorMessage, addItem, handleOnSave, taskList, setTaskList }) => {
  if (errorMessage) {
    return <Error errorMessage={errorMessage} />;
  }

  return (
    <Fragment>
      <TaskInput addItem={addItem} />
      <TaskList saveState={handleOnSave} taskList={taskList} setTaskList={setTaskList} />
    </Fragment>
  );
};

export default TasksPage;
