import React from "react";
import "./TemplateSelector.css";

function TemplateSelector({ setCurrentTemplate }) {
  const templates = ["Business", "Portfolio", "Blog", "E-commerce"];

  return (
    <section id="templates" className="template-selector">
      <h2>Select a Template</h2>
      <div className="template-grid">
        {templates.map((template, index) => (
          <div
            key={index}
            className="template-card"
            onClick={() => setCurrentTemplate(template)}
          >
            <img src={`assets/templates/${template.toLowerCase()}.jpg`} alt={template} />
            <h3>{template}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TemplateSelector;
