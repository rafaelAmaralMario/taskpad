import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutPage from './AboutPage/AboutPage';
import PageNotFound from './PageNotFound/PageNotFound';
import SettingsPage from './SettingsPage/SettingsPage';
import TasksPage from './TasksPage/TasksPage';

export const navigationMenu = [
  {
    icon  : 'fact_check',
    label : 'Task',
    route : '/',
  },
  {
    icon  : 'settings',
    label : 'Settings',
    route : '/settings',
  },
  {
    icon  : 'info',
    label : 'About',
    route : '/about',
  },
];

const Routes = ({ errorMessage, addItem, handleOnSave, taskList, setTaskList }) => {
  return (
    <Switch>
      <Route
        path='/'
        exact
        render={() => (
          <TasksPage
            errorMessage={errorMessage}
            addItem={addItem}
            handleOnSave={handleOnSave}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        )}
      />
      <Route path='/about' exact render={() => <AboutPage />} />
      <Route path='/settings' exact render={() => <SettingsPage />} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
