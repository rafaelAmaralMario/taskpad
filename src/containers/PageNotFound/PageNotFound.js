import React from 'react';

import { Title, ButtonLink } from '../../components';

const PageNotFound = () => {
  return (
    <div>
      <Title text='Page not Found' />
      <ButtonLink label='Back to home' route='/' />
    </div>
  );
};

export default PageNotFound;
