// components/DynamicContent.js
import { useState } from "react";

const DynamicContent = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addParagraph = () => {
    setParagraphs([...paragraphs, inputValue || "Default text"]);
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={addParagraph}>Add Paragraph</button>
      <div id="content">
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default DynamicContent;
