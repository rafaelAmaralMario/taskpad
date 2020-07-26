import React from 'react';

import { Title } from '../../components';
import SettingsContext from '../../contexts/settingsContext';

import './SettingsPage.scss';

const themes = [
  {
    label : 'Default',
    key   : 'default',
  },
  {
    label        : 'Classic',
    primaryColor : '#795548',
    key          : 'classic',
  },
];

const Settings = () => {
  return (
    <div>
      <Title text='Settings' />
      <SettingsContext.Consumer>
        {({ theme, handleToggleTheme }) => (
          <div className='themes'>
            {themes.map((themeItem) => (
              <div
                key={themeItem.key}
                className='themes__item'
                style={{ backgroundColor: themeItem.primaryColor }}
                onClick={() => {
                  handleToggleTheme(themeItem);
                }}>
                <p>
                  {themeItem.label}
                  {
                    themeItem.key === theme.key ? <i className='material-icons'>check</i> :
                    null}
                </p>
              </div>
            ))}
          </div>
        )}
      </SettingsContext.Consumer>
    </div>
  );
};

export default Settings;
