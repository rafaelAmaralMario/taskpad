import React from 'react';

import TaskMenu from '../TaskMenu/TaskMenu';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';

import './PageLayout.scss';

const PageLayout = ({
  handleOnRefresh,
  handleOnSave,
  isLoading,
  hasError,
  toggleMenu,
  isOpen,
  closeMenu,
  children,
  navigationMenu
}) => {
  return (
    <div>
      <TaskMenu
        onRefresh={handleOnRefresh}
        onSave={handleOnSave}
        isLoading={isLoading}
        hasError={hasError}
        toggleMenu={toggleMenu}
      />
      <NavigationDrawer isOpen={isOpen} closeMenu={closeMenu} navigationMenu={navigationMenu} />
      <div className='task-container'>{children}</div>
    </div>
  );
};

export default PageLayout;
