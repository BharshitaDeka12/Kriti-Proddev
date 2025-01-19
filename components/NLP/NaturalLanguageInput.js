import React, { useState } from 'react';
import './NaturalLanguageInput.css'; // Import the CSS for this component

const NaturalLanguageInput = ({ onCommandSubmit }) => {
  const [command, setCommand] = useState('');

  const handleInputChange = (e) => {
    setCommand(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (command.trim()) {
      onCommandSubmit(command);  // Pass the command to the parent (App.js)
      setCommand('');  // Clear input after submitting
    }
  };

  return (
    <div className="natural-language-input">
      <h2>Enter your command</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={command}
          onChange={handleInputChange}
          placeholder="Type your command here"
          autoFocus
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NaturalLanguageInput;
