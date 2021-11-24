import React, { useState } from 'react';

// Component
const Form = () => {
  const [campos, setCampos] = useState({
    to: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const name = event.target.name;
    const value = event.target.value;
    setCampos((values) => ({ ...values, [name]: value }));
  };

  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    alert(campos);
  };

  return (
    <div className="form">
      <form onSubmit={handleFormSubmit}>
        <h1>Email Sender</h1>
        <label>To:</label>
        <input
          name="to"
          type="text"
          value={campos.to}
          onChange={handleInputChange}
        />
        <label>Subject:</label>
        <input
          name="subject"
          type="text"
          value={campos.subject}
          onChange={handleInputChange}
        />
        <label>Message:</label>
        <input
          name="message"
          type="text"
          value={campos.message}
          onChange={handleInputChange}
        />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
};

export default Form;
