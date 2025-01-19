import React from "react";
import "./FeatureSection.css";

function FeatureSection() {
  return (
    <section id="features" className="feature-section">
      <h2>Features</h2>
      <div className="feature-cards">
        <div className="feature-card">
          <h3>Real-Time Preview</h3>
          <p>See your changes instantly as you design.</p>
        </div>
        <div className="feature-card">
          <h3>AI Suggestions</h3>
          <p>Get AI-driven design and content recommendations.</p>
        </div>
        <div className="feature-card">
          <h3>Drag-and-Drop Editor</h3>
          <p>Customize your site effortlessly with a drag-and-drop interface.</p>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
