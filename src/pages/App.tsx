import React from 'react';
// import ReactDOM from 'react-dom';

export const App: React.FC = () => {
  return (
    <form>
      <h1>Email Sender</h1>
      <p>To:</p>
      <input type="text" />
      <p>Subject:</p>
      <input type="text" />
      <p>Message:</p>
      <textarea value="Type your message" />
      <br />
      <button>Send</button>
    </form>
  );
};

export default App;
