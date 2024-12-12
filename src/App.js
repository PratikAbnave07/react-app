import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';


function App() {
  const [mode, setMode] = useState('light')
  const [toggleText, setToggleText] = useState('Enable Dark Mode')

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setToggleText('Enable Light Mode')
      document.body.style.backgroundColor = '	#042743 '
      showAlert("Dark mode is Enabled successfully", "success")
    }
    else {
      setMode('light')
      setToggleText('Enable Light Mode')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is Enabled successfully", "success")
    }
  }
  return (
    <>
      
        <Navbar Title="Text Utils" AboutUs="About Text Utils" mode={mode} toggleMode={toggleMode} toggleText={toggleText} />
        <Alert alert={alert} />
        <div className="container my-3">
          
            <TextForm showAlert={showAlert} heading="Enter your text below to analyze" mode={mode} toggleMode={toggleMode} toggleText={toggleText} />
            
            <About mode={mode} toggleMode={toggleMode} />
              
            
        </div>
      
    </>
  );
}

export default App;
