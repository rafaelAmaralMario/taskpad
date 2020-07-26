import React from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

const ButtonLink = ({ label, route }) => {
  return (
    <Link className='button button-link' to={route}>
      {label}
    </Link>
  );
};

export default ButtonLink;
