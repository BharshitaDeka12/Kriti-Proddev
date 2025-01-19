import React, { useState } from 'react';

const RealTimePreview = () => {
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className="real-time-preview">
      <textarea 
        value={content} 
        onChange={handleChange} 
        placeholder="Type something to preview..."
      />
      <div className="preview">
        <h2>Preview:</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default RealTimePreview;
