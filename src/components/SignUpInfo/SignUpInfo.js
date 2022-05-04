import React from 'react';
import './SignUpInfo.css';

const SignUpInfo = () => {
  return (
    <div className="signUp container">
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
    </div>
  );
};

export default SignUpInfo;
