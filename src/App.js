import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const nextButtonColor = buttonColor === "red" ? "blue" : "red";

  const buttonColorHandler = (color) => {
    setButtonColor(color);
  };

  const handleButtonStatus = (e) => {
    setDisabled(e.target.checked);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: disabled ? "gray" : buttonColor,
          color: "white",
        }}
        onClick={() => buttonColorHandler(nextButtonColor)}
        disabled={disabled}
      >
        Change to {nextButtonColor}
      </button>
      <input
        id="disable-button-checkbox"
        defaultChecked={disabled}
        type="checkbox"
        onChange={(e) => handleButtonStatus(e)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
