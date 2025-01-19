import React, { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import NaturalLanguageInput from './components/NLP/NaturalLanguageInput';  // Import the new component
import FeatureSection from "./components/FeatureSection/FeatureSection";
import TemplateSelector from "./components/TemplateSelector/TemplateSelector";
import DragAndDropEditor from "./components/DragAndDropEditor/DragAndDropEditor";
import RealTimePreview from "./components/RealTimePrev/RealTimePreview";
import SEOSettings from "./components/SEO/SEOSettings";
import AIAssistant from "./components/AIAssistant/AIAssistant";
import Footer from "./components/Footer/Footer";

function App() {
  const [currentTemplate, setCurrentTemplate] = useState(null);

  // Function to handle the natural language commands
  const handleCommandSubmit = (command) => {
    console.log("Received command:", command);
    if (command.toLowerCase().includes("change template")) {
      // Example: change template logic
      console.log("Changing template...");
      setCurrentTemplate("newTemplate"); // Replace with actual template change logic
    } else if (command.toLowerCase().includes("show preview")) {
      console.log("Showing real-time preview...");
      // Trigger real-time preview component or other logic
    } else if (command.toLowerCase().includes("open drag-and-drop")) {
      console.log("Opening drag-and-drop editor...");
      // Show drag-and-drop editor
    } else {
      console.log("Command not recognized");
    }
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <FeatureSection />
      
      {/* Add Natural Language Input Component */}
      <NaturalLanguageInput onCommandSubmit={handleCommandSubmit} />
      
      <TemplateSelector setCurrentTemplate={setCurrentTemplate} />
      
      {currentTemplate && (
        <>
          <DragAndDropEditor />
          <RealTimePreview />
          <AIAssistant />
          <SEOSettings />
        </>
      )}
      
      <Footer />
    </div>
  );
}

export default App;
