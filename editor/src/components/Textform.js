import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = (event) => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpace = () => {
    if (typeof text === "string") {
      const newText = text.replace(/\s+/g, " ").trim();
      setText(newText);
    }
  };

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear text
        </button>

        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy text
        </button>

        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Remove extra spaces
        </button>
      </div>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words,{" "}
          {text.length} characters
        </p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
