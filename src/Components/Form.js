import React ,{useState} from 'react'


export default function Form(props) {
  const upClick = ()=>
  {
    let newText =text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event)=>
  {
    setText(event.target.value);
  }
  
  const clearSec =()=>
  {
    console.log( text);
    setText('');
  }

  const [text,setText] =useState("");
  return (
    <>
    <h1>{props.er}</h1>
    <div>
    <textarea className="form-control" id="my" value={text} onChange={handleOnChange} cols='50' rows="10"></textarea>
    </div>
    <button className='btn btn-primary mx-1' onClick={upClick}>Uppercase </button>
    <button className='btn btn-danger' onClick={clearSec}>Clear</button> 
    </>
  )
}
