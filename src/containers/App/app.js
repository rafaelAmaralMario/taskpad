import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes, { navigationMenu } from '../Routes';

import { PageLayout } from '../../components/';
import SettingsProvider from '../../contexts/settingsProvider';

import TaskService from '../../services/TaskServices';

const App = () => {
  const [
    taskList,
    setTaskList,
  ] = useState([]);

  const [
    hasError,
    setHasError,
  ] = useState([]);

  const [
    isLoading,
    setIsLoading,
  ] = useState(false);

  const [
    isOpen,
    setIsOpen,
  ] = useState(false);

  const [
    errorMessage,
    setErrorMessage,
  ] = useState('');

  const addItem = (value) => {
    setTaskList(() => {
      const newList = [
        ...taskList,
        value,
      ];
      handleOnSave(newList);
      return newList;
    });
  };

  const handleOnSave = (newList) => {
    setHasError(false);
    setIsLoading(true);
    const taskListObject = newList || taskList;
    TaskService.save(taskListObject)
      .then(() => {
        0;
        setErrorMessage('');
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage('Failed To save the task into the list!!');
        setIsLoading(false);
        setHasError(true);
      });
  };

  const handleOnRefresh = () => {
    setHasError(false);
    setIsLoading(true);
    TaskService.load()
      .then((response) => {
        setErrorMessage('');
        setTaskList(response || []);
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage('Failed To load the task list!!');
        setIsLoading(false);
        setHasError(true);
      });
  };

  useEffect(() => {
    handleOnRefresh();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Router>
      <SettingsProvider>
        <PageLayout
          handleOnRefresh={handleOnRefresh}
          handleOnSave={handleOnSave}
          isLoading={isLoading}
          hasError={hasError}
          toggleMenu={toggleMenu}
          isOpen={isOpen}
          navigationMenu={navigationMenu}
          closeMenu={closeMenu}>
          <Routes
            errorMessage={errorMessage}
            addItem={addItem}
            handleOnSave={handleOnSave}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </PageLayout>
      </SettingsProvider>
    </Router>
  );
};

export default App;
