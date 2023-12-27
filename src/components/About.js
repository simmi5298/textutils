import React from 'react'

export default function About(props) {

// const [myStyle,setMyStyle]=useState({
//     color: 'black',
// backgroundColor: 'white'
// })  
//const [btntext, setBtnText] = useState("enable dark mode");
//  const toggleStyle=()=>{
//     if(myStyle.color==='white'){
//         setMyStyle({
//             color: 'black',
//             backgroundColor: 'white',
//             border:'2px solid white'
//         })
//         setBtnText("enable dark mode")
//     }
//     else{
//         setMyStyle({
//             color:'white',
//             backgroundColor:'black',
           
//         })
//         setBtnText("enable light mode")
//     }
// }
// let myStyle={
// color:props.mode==='dark'?'white':'black',
// backgroundColor:props.mode==='dark'?'#131a3b':'white'
// }
  return (
        <div classNameName="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 classNameName="my-3">About us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'rgb(35 46 97)':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            <strong>Analyze Your text</strong>
        </button>
        </h2>
        <div id="flush-collapseOne" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'rgb(35 46 97)':'white'}} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, removing extra spaces and clearing complete text.
</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'rgb(35 46 97)':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
           <strong>Free to use</strong> 
        </button>
        </h2>
        <div id="flush-collapseTwo" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'rgb(35 46 97)':'white'}} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'rgb(35 46 97)':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            <strong>Browser Compatible</strong>
        </button>
        </h2>
        <div id="flush-collapseThree" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'rgb(35 46 97)':'white'}} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</div>
        </div>
    </div>
    </div>
    {/* <div classNameName="container my-3">
    <button onClick={toggleStyle} type="button" style={myStyle} classNameName="btn btn-primary ">{btntext}</button>

    </div> */}
    </div>
  )
}
