import React from 'react';
// import ReactDOM from 'react-dom';

export const App: React.FC = () => {
  return (
    <div className="center">
      <form>
        <h1>Email Sender</h1>
        <p>To:</p>
        <input type="text" />
        <p>Subject:</p>
        <input type="text" />
        <p>Message:</p>
        <input type="text" />
        <br />
        <button>Send</button>
      </form>
    </div>
  );
};

export default App;
