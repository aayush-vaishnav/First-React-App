import React, { useState } from 'react'

export default function TextArea(props) {
    const [text,setText] = useState('Enter Your Text')

    const changeText = (e) =>{
        setText(e.target.value)
    }

    const upperCase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const lowerCase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clearText = () =>{
        let newText = '';
        setText(newText);
    }


  return (
    <>
    <div className="container">
    <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode == 'white'? 'dark': 'light'}`}>WRITE YOUR TEXT HERE</label>
        <textarea className={`form-control bg-${props.mode === 'white'? 'light': 'dark'}`} style={{color: props.mode === 'white'? 'black': 'white'}} value={text} onChange={changeText} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={upperCase} >Convert to UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={lowerCase} >Convert to LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={clearText} >Clear Text</button>
    </div>
    </>
    )
}


 