import React,{useState} from 'react'



export default function TextArea(props) {
  const [text, setText] = useState('');
  const handleUpClick = ()=>{
    console.log("UpperCase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase","success");
  }

  const handleLowClick = ()=>{
    console.log("LowerCase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase","success");
  }

  const handleClearClick = ()=>{
    let newText ="";
    setText(newText)
    props.showAlert("Text Cleared!","success");
  }

  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value);
  }

  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
      <h2>{props.heading}</h2>
  <div className='mb-3'>
    <textarea className='form-control' value={text}  style={{backgroundColor : props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'black'}}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2 my-3" onClick={handleLowClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2 my-3" onClick={handleClearClick}>Clear Text</button>
  </div>
    <div className='container my-5' style={{color : props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length}Minutes Read</p>
    <h2>Preview Text</h2>
    <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
  </>
  )
}
