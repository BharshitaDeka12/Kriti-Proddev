import React from "react";
import "./AIAssistant.css";

function AIAssistant() {
  return (
    <section className="ai-assistant">
      <h2>AI Assistant</h2>
      <div className="ai-suggestions">
        <p>Based on your content, we suggest adding a blog section to engage your audience!</p>
        <button>Apply Suggestion</button>
      </div>
    </section>
  );
}

export default AIAssistant;
