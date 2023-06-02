import React, { useState } from "react";


export default function TextForm(props) {


  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);


  };
  const handleClearClick = (event) => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear all the text!","success");
  };

  const handleCopy = (event) => {
   
    navigator.clipboard.writeText(text); 
    props.showAlert("Text has copy to your clipboard!","success");
  };
  const handleExtraSpace = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been removed!","success");
  };
  const [text, setText] = useState("");
  return (  
    <>
    <div className="container" style={{color: props.mode==='dark' ? 'white' : '#042743' }}>
      <h1 className="mb-4">{props.heading}</h1>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1"></label>
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode==='dark' ? '#042743' : 'white',color: props.mode==='dark' ? 'white' : '#042743'}}></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleClearClick}>
        Clear text
      </button>
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleCopy}>
        Copy text
      </button>
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleExtraSpace}>
        Remove Extra Spaces
      </button>
    </div>
    <div className="container  my-2" style={{color: props.mode==='dark' ? 'white' : '#042743' }}>
        <h2>Your text summary</h2>
      
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Nothing to preview !"}</p>
    </div>
  </>
  );
}
