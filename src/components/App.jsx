import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [changeBackgroundStyle, setChangeBackgroundStyle] = useState({
    backgroundColor: "white",
  });

  function handleClick() {
    setHeadingText("Clicked");
  }

  function changeBackground() {
    setChangeBackgroundStyle({ backgroundColor: "black" });
  }

  function revertBackground() {
    setChangeBackgroundStyle({ backgroundColor: "white" });
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={changeBackground}
        onMouseOut={revertBackground}
        style={changeBackgroundStyle}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
