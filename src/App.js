import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  let bgColor = "grey";

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
    if(bgColor === "black")
    {
      document.body.style.backgroundColor = "#424242";
      bgColor = "grey";
      
    }else if(bgColor === 'grey'){
      document.body.style.backgroundColor = "black";
      bgColor = 'black';
    }
  }

  return (
    <>
      <Navbar
        title="TextUtils"
        about="About TextUtils"
        mode={mode}
        toggleMode={ToggleMode}
        toggleGrey={ToggleGrey}
      />

      <Alert alert={alert} />

      <div className="container my-3">
        <TextArea heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
