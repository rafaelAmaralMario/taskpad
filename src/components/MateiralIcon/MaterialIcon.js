import React from 'react';
import  classnames from 'classnames';

import './MaterialIcon.scss';

const MaterialIcon = ({children, iconClass,onClick}) =>{
    const className = classnames("material-icons", iconClass)    
    return (
        <i className={className} onClick={onClick}>{children}</i>
    )
}

export default MaterialIcon;
