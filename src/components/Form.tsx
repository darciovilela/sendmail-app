import axios from 'axios';
import { useState } from 'react';

// Component
const Form = () => {
  const [campos, setCampos] = useState({
    to: '',
    subject: '',
    message: '',
  });

  const handleInputChange:
    | React.ChangeEventHandler<HTMLInputElement>
    | undefined = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCampos((values) => ({ ...values, [name]: value }));
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> | undefined =
    async (event) => {
      event.preventDefault();
      try {
        await axios.post('http://localhost:4000/send', campos);
        alert('The email was sent!');
      } catch (e: any) {
        alert(e.message);
      }

      setCampos({
        to: '',
        subject: '',
        message: '',
      });
    };

  return (
    <div className="form">
      <form onSubmit={handleFormSubmit}>
        <h1>Email Sender</h1>
        <label>To:</label>
        <input
          name="to"
          type="email"
          value={campos.to}
          onChange={handleInputChange}
          required
        />
        <label>Subject:</label>
        <input
          name="subject"
          type="text"
          value={campos.subject}
          onChange={handleInputChange}
          required
        />
        <label>Message:</label>
        <input
          name="message"
          type="text"
          value={campos.message}
          onChange={handleInputChange}
          required
        />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
};

export default Form;
