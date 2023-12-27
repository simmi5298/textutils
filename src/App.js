
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000)
  }
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#11235A';
    showAlert("Darkmode has been enabled","success");
    // document.title='Textutils-DarkMode';
  }
    else{
      setMode('light');   
       document.body.style.backgroundColor='white';
       showAlert("lightmode has been enabled","success");
      //  document.title='Textutils-LightMode';

    }
  }
  return (
   <>
   < BrowserRouter>
<Navbar title="TextUtils " aboutText="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
  
<Routes>
            <Route exact path="/about" element={<About  mode={mode}/>} >

            </Route>

            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}>

            </Route>
  </Routes>
{/* <Textform showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/> */}
</div>
{/* <About/> */}
</ BrowserRouter>


   </>
  );
}

export default App;
