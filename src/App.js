import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');// wether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been ebabled", "success")
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "This App is Amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install this app Now"
      // }, 1500);
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been ebabled", "success")
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
      <Main>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below"mode={mode}/>}/>
          </Routes>
        </div>
      </Main>
    </>
  );
}
export default App;
