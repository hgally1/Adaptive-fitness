import React from 'react';
import Form from './Form'

const ApplicationPage = () => (
  <div id="apply" className="body">
      
    <Form />
    <div className="text-center">
        <a className="btn btn-primary btn-top" href="/thanks">Finish Applying</a>
    </div>
  </div>
);

export default ApplicationPage;