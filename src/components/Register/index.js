import React from 'react';

const RegisterPage = () => (

    <div id="login-page" className="login">
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <div className="text-center">
         
            <h1><u>STEP 1: </u></h1>
            <br />
            <a href="/application" className="btn btn-primary btn-top">Fill Out Application Form</a>
            <br />
            {/* trigger thank you video that Jai will do */}
            <h1><u>STEP 2: </u></h1>
            <br />
            <p className="btn btn-primary btn-top">Be On The Lookout For An Email!</p>
            <br />
            <h1><u>STEP 3: </u></h1>
             <br />
            <p className="btn btn-primary btn-top">Trust The Process!</p>
          </div>
        </div>
    
    </div>
  );

export default RegisterPage;
