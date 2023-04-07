import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import AboutUs from "./components/AboutUs";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  let bgColor = "black";

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const ToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Success! Dark mode enabled!", "success");
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Success! Light mode enabled!", "success");
    }
  };

  const ToggleGrey = () => {
    if (bgColor === "black") {
      document.body.style.backgroundColor = "#424242";
      bgColor = "grey";
    } else if (bgColor === "grey") {
      document.body.style.backgroundColor = "black";
      bgColor = "black";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          about="About TextUtils"
          mode={mode}
          toggleMode={ToggleMode}
          toggleGrey={ToggleGrey}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={<TextArea mode={mode} heading={"Enter your text here!"} showAlert={showAlert}/>}
          ></Route>

          <Route
            path="/about"
            element={
              <div className="container my-3">
                <AboutUs />
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
