import React from 'react';

import MaterialIcon from '../MateiralIcon/MaterialIcon';
import SettingsContext from '../../contexts/settingsContext';

import './TaskMenu.scss';

const TaskMenu = ({ onRefresh, isLoading, hasError, toggleMenu }) => {
  return (
    <SettingsContext.Consumer>
      {({ theme }) => (
        <div className='menu-container' style={{ backgroundColor: theme.primaryColor }}>
          <div className='menu'>
            <div className='menu-title'>
              <MaterialIcon onClick={toggleMenu} iconClass='menu-icon'>
                menu
              </MaterialIcon>
              <h2> React Task Handler</h2>
            </div>
            {
              isLoading ? <div className='menu-actions'>
                <MaterialIcon iconClass='rotation'>refresh</MaterialIcon>
              </div> :
              null}

            {
              hasError ? <div className='menu-actions'>
                <MaterialIcon onClick={onRefresh} iconClass='error-icon'>
                  error
                </MaterialIcon>
              </div> :
              null}
          </div>
        </div>
      )}
    </SettingsContext.Consumer>
  );
};

export default TaskMenu;
