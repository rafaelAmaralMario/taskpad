import React from 'react';

import './Error.scss';
const Error = ({ errorMessage }) => {
  return <p className='error-message'> {errorMessage} </p>;
};

export default Error;
