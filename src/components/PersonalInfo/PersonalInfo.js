import React from 'react';
import './PersonalInfo.css';

const PersonalInfo = () => {
  return (
    <div className="personalInfo container">
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="text" placeholder="Username" />
    </div>
  );
};

export default PersonalInfo;
