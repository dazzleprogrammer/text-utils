import React, {useState} from 'react'

export default function TextForm(props) {
  const handleClick = ()=> {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = ()=> {
  
    let newText = text.toLowerCase();
    setText(newText)
  }

  const ClearText = ()=> {
    
    let newText = ('');
    setText(newText)
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    
  }

  const handleOnChange = (event)=> {
    setText(event.target.value);
  } 
  const [text, setText] = useState('');
 
  return (
   
    <div className='conatiner' style={{color: props.mode=== 'dark'?'white':'black' }}>
      <h1> {props.heading} </h1>
<div className="mb-3">
  {/* <label for="myBox" className="form-label"></label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}}  id="myBox" rows="18" > </textarea>
</div>
<button className = "btn btn-primary mx-2" onClick={handleClick} >  UPPERCASE </button>
<button className = "btn btn-success mx-2" onClick={handleLoClick} >  lowercase </button>
<button className = "btn btn-danger mx-2" onClick={ClearText} >  Clear </button>
<button className = "btn btn-dark mx-2" onClick={handleCopy} >  Copy </button>
<button className = "btn btn-warning mx-2" onClick={handleExtraSpace} >  Remove Extra Space </button>

<div className = "container my-1" style = {{color:props.mode==='dark'?'white':'black'}} >
<h1>Data</h1>
<p>{text.split(" ").length} words and {text.length} characters  </p>
<p>{0.008 * text.split(" ").length}Minutes read</p>
<h3>Preview</h3>
<p>{text.length>0?text:"Enter something to preview it here"}</p>

</div>
   
    </div>
   
  )
}
