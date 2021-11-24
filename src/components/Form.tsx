import React from 'react';

// Component
const Form = () => {
  return (
    <div className="form">
      <form>
        <h1>Email Sender</h1>
        <label>To:</label>
        <input name="to" type="text" />
        <label>Subject:</label>
        <input name="subject" type="text" />
        <label>Message:</label>
        <input name="message" type="text" />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
};

export default Form;
