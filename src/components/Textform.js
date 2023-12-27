import React ,{useState} from 'react'


export default function Textform(props) {
   
    const handleUpClick=()=>{
        // console.log("uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upper case","success");
    }
    const handleLowClick=()=>{
        // console.log("uppercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lower case","success");

    }
    const handleclearClick=()=>{
        // console.log("uppercase was clicked"+text);
        let newText='';
        setText(newText)
    }
    // const handleCopy = () => {
    //     navigator.clipboard.writeText(text); 
    //     props.showAlert("Copied to Clipboard!", "success");
    // }
     const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const handleOnchange=(event)=>{
        // console.log("on change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
   
  return (
    <>
    <div className="conatiner" style={{color:props.mode===`dark`?`white`:`#131a3b `}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclearClick}>clear text</button>
{/* <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button> */}
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 
    </div>
    <div className="container my-3" style={{color:props.mode===`dark`?`white`:`#131a3b `}}>
        <h2>
            Your text summary
        </h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>      
        <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length}Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
