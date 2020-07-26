import React, { useState } from 'react';

import SettingsContext from './settingsContext';

const SettingsProvider = ({ children }) => {
  const [
    theme,
    setTheme,
  ] = useState({});

  const handleToggleTheme = (theme) => setTheme(theme);

  const settingsContextValue = {
    theme,
    handleToggleTheme,
  };

  return <SettingsContext.Provider value={settingsContextValue}>{children}</SettingsContext.Provider>;
};

export default SettingsProvider;
