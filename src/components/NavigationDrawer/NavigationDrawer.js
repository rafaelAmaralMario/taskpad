import React from 'react';
import classnames from 'classnames';

import MaterialIcon from '../MateiralIcon/MaterialIcon';
import NavigationDrawerItem from '../NavigationDrawerItem/NavigationDrawerItem';

import './NavigationDrawer.scss';

const NavigationDrawer = ({ isOpen, closeMenu, navigationMenu }) => {
  const menuClass =
  classnames('navigation-drawer-container', {
    'is-open': isOpen
  })

  return (
    <div className={menuClass}>
      <div className='menu-action'>
        <MaterialIcon onClick={closeMenu}>close</MaterialIcon>
      </div>
      <div className='menu-list'>
        {
          navigationMenu.length && navigationMenu.map( (menuItem, idx) => (
            <NavigationDrawerItem 
              key={idx}
              route={menuItem.route} 
              icon={menuItem.icon} 
              text={menuItem.label} 
              callbackFunction={closeMenu} />)
        
          )
        }
      </div>
    </div>
  );
};

export default NavigationDrawer;
