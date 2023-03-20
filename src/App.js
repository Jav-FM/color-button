import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const nextButtonColor = buttonColor === "red" ? "blue" : "red";

  const buttonColorHandler = (color) => {
    setButtonColor(color);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => buttonColorHandler(nextButtonColor)}
      >
        Change to {nextButtonColor}
      </button>
    </div>
  );
}

export default App;
