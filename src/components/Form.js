import React, { useState } from 'react';

const Form = () => {
  const [page, setPage] = useState(0);
  const FormTitles = ['Sign Up', 'Personal Information'];
  return (
    <div className="form">
      <div className="progressbar"></div>
      <div className="form-container">
        <div className="header"></div>
        <div className="body"></div>
        <div className="footer">
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
