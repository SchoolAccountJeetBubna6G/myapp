import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("");

  const findWords = (text) => {
    let new_text = text.trim()
    return new_text.split(' ').length;
  }

  findWords(text);

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleClearText = () => {
    let newtext = "";
    setText(newtext);
  };

  const handleAltCase = () => {
    let newtext = text.split("");
    for (let i = 0; i < text.length - 1; i++) {
      if (i % 2 === 0) {
        newtext[i] = newtext[i].toUpperCase();
      } else if (i % 2 !== 0) {
        newtext[i] = newtext[i].toLowerCase();
      }
    }
    setText(newtext.join(""));
    //setText(newtext)
  };

  const handleAnyCase = () => {
    let newtext = text.split("");
    for (let i = 0; i < text.length - 1; i++) {
      let randomNum = Math.floor(Math.random() * 2);
      console.log(randomNum);
      if (randomNum % 2 === 0) {
        newtext[i] = newtext[i].toLowerCase();
      } else if (randomNum % 2 !== 0) {
        newtext[i] = newtext[i].toUpperCase();
      }
    }
    setText(newtext.join(""));
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{color: props.mode === "dark" ? "white" : "black"}}>
      <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className={`form-control bg-${props.mode}`}
          value={text}
          onChange={handleChange}
          id="exampleFormControlTextarea1"
          rows="8"
          style={{color: props.mode === "dark" ? "white" : "black"}}
        ></textarea>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleAltCase}>
          Alternative Case
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleAnyCase}>
          Any Case
        </button>
      </div>

      <div>
        <h1>Text Summary</h1>
        <p></p>
        <p>{text === '' ? 0 : findWords(text)} words</p>
        <p>{text.length} characters</p>

        <h3>{0.008 * text.split(" ").length} minutes read</h3>
        <h1>Preview</h1>
        <p>{text === '' ? 'Enter text above to preview it here': text}</p>
      </div>
    </div>
      </div>
      
  );
}
