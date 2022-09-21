
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React,{useState} from 'react';
import Alert from './components/Alert';
//import {
 // BrowserRouter as Router,
  //Switch,
  //Route,
//} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    },1500);
  }
  const toggleMode = ()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#000000';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
  <>
{/*  <Router> */}
  <Navbar title = "SoNiC's PlayGround" section1="Home" section2="About Me" section3="Skills" section4="Projects" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container">
{/*  <Switch> */}
         {/* <Route exact path="/About-Me">
          <About />
          </Route>
           <Route exact path="/"> */}
          <TextArea showAlert={showAlert} heading = "Enter the text to analyze" mode={mode}/>
          {/*</Route>*/}
 {/* </Switch>*/}
  </div>
  {/*</Router>*/}
  </>
  );
}

export default App;
