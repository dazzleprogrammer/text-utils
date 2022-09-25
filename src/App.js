
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2b1c1c'
      document.body.style.textColor = 'white'
      // showAlert("Dark mode is enabled", "success");
      document.title = 'Text Utils - Dark Mode';
      // setInterval(()=> {
      //   document.title = 'TextUtils is amazing';
      // }, 5000 );
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.textColor = 'black'
      document.title = 'Text Utils - Light Mode';
      // setInterval(()=> {
      //   document.title = 'Install Now';
      // }, 1000 );
    }
  }
  const [mode, setMode] = useState('light');
  return (
   <>
    
<Navbar title = "TextUtils" about = "About"  mode = {mode} toggleMode={toggleMode} />
{/* <Navbar/> */}
<div className="container my-3">
<TextForm heading = "Enter your text here" mode = {mode} />
</div>

   </>
  );
}

export default App;
