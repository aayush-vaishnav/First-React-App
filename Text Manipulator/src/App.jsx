import { useState } from "react";
import "./App.css";
import Navbar from "./assets/Navbar";
import TextArea from "./assets/TextArea";
import Alert from "./assets/Alert";
import About from "./assets/About";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("white");
  const [text, setText] = useState("Enable Darkmode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const changeMode = () => {
    if (mode === "white") {
      setMode((document.body.style.background = "black"));
      setText("Enable LightMode");
      showAlert("DarkMode has been Enabled", "success");
    } else {
      setMode((document.body.style.background = "white"));
      setText("Enable DarkMode");
      showAlert("LightMode has been Enabled", "success");
    }
  };

  return (
    <>
      <Main>
        <Navbar changeMode={changeMode} mode={mode} text={text} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/' element={<TextArea mode={mode} />}/>
          <Route exact path='/about' element={<About />}/>
          
        </Routes>
      </Main>
    </>
  );
}

export default App;
