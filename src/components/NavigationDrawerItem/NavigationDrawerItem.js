import React from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

import MaterialIcon from '../MateiralIcon/MaterialIcon';

import './NavigationDrawerItem.scss';

const NavigationDrawerItem = ({ route, icon, text, callbackFunction, history, location }) => {

  const className = classnames('menu-item', {'active' : location.pathname === route})

  return (
    <div
      className={className}
      onClick={() => {
        callbackFunction();
        history.push(route);
      }}>
      {icon && <MaterialIcon>{icon}</MaterialIcon>}
      <span>{text}</span>
    </div>
  );
};

export default withRouter(NavigationDrawerItem);
