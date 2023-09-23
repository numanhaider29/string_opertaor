import React,{useState} from 'react'

function TextForm(props) {
    const [text, settext] = useState('');
    const handleUpClick = () =>{
        // console.log("UpperCase Was Clicked"+ text)
        let newText = text.toUpperCase();
        settext(newText)
        props.showAlert("Converted to Upper Case","success")
    }
    const handleClearClick = () =>{
        // console.log("UpperCase Was Clicked"+ text)
        let newText = ('')
        settext(newText)
        props.showAlert("text removed","success")
    }
const handleCopy = ()=>{
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("text copied","success")
}

const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    settext(newText.join(" "))
    props.showAlert("Extra spaces removed","success")
}

    const handleLoClick = () =>{
        // console.log("UpperCase Was Clicked"+ text)
        let newText = text.toLowerCase();
        settext(newText)
        props.showAlert("text Converted to Lower Case","success")
    }

    const handleOnChange = (event) =>{
        // console.log("On Change")
        settext(event.target.value)
        
    }
    return (
            <>
        <div className='container'style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} 
                style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} 
                id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear the Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="contaier my-3"style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words , {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Read Time in Minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'ENTER SOME TEXT IN THE AREA ABOVE TO PREVIEW IN HERE'}</p>
        </div>
        </>
    )
}

export default TextForm
