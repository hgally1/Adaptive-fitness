import React from 'react';
import Form from './Form'

const ApplicationPage = () => (
  <div id="apply" className="body">
      <div className="container center">
    <Form />
    <div className="text-center">
        <a className="btn btn-primary btn-top" href="/thanks">Finish Applying</a>
    </div>
    </div>
  </div>
);

export default ApplicationPage;