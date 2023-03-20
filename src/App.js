import { useState } from "react";
import replaceCamelWithSpaces from "./utils/replaceCamelWithSpacesFunction";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("mediumVioletRed");
  const [disabled, setDisabled] = useState(false);
  const nextButtonColor =
    buttonColor === "mediumVioletRed" ? "midnightBlue" : "mediumVioletRed";

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
        Change to {replaceCamelWithSpaces(nextButtonColor)}
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
