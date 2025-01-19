import React, { useState } from "react";
import "./SEOSettings.css";

function SEOSettings() {
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const handleMetaTitleChange = (e) => {
    setMetaTitle(e.target.value);
  };

  const handleMetaDescriptionChange = (e) => {
    setMetaDescription(e.target.value);
  };

  return (
    <section className="seo-settings">
      <h2>SEO Settings</h2>
      <label>Meta Title</label>
      <input type="text" value={metaTitle} onChange={handleMetaTitleChange} placeholder="Enter meta title" />
      <label>Meta Description</label>
      <input type="text" value={metaDescription} onChange={handleMetaDescriptionChange} placeholder="Enter meta description" />
    </section>
  );
}

export default SEOSettings;
