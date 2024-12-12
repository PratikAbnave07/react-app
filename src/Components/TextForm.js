import React, {useState} from "react";

export default function TextForm(props) {

    const [text,setText] = useState ("")
    const [count, newCount] = useState (0);
    
    const handleUpClick = () => {
        // console.log("Upper button clicked")
        setText(text.toUpperCase())
        newCount(count+1);
        props.showAlert("Converted to Uppercase","success")
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text Copied Successfully!","success")
    }

    const handleLowClick = () => {
        setText(text.toLowerCase())
        newCount(count+1);
        props.showAlert("Converted to lowercase","success")
    }

    const handlePasteClick = async () => {
        setText(text + await navigator.clipboard.readText())
        props.showAlert("Text Pasted Successfully!","success")
    }
    const handleOnChange = (event) => {
        //   console.log("On change")
        setText(event.target.value)
    }
    
    
    return (
        <>
        <div className="container" style={{color: props.mode === 'light' ? '#042743':'white' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" style={{backgroundColor: props.mode === 'dark' ? 'grey':'white', color: props.mode === 'light' ? '#042743':'white' }} onChange={handleOnChange} id="textBox" value={text} rows="8"></textarea>
                <label htmlFor="form-control" >Text is changed {count} Number of times </label>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy to Clipboard</button>
            <button className="btn btn-primary mx-2" onClick={handlePasteClick}>Paste from Clipboard</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light' ? '#042743':'white' }}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length } words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes of read time</p>
        </div>
        </>
    )
} 