import "./index.css";
import { useState } from "react";

function App() {
  const [myStyle, setMyStyleStyle] = useState("pre-final");

  const handleClick = () => {
    setMyStyleStyle((myStyle) =>
      myStyle === "pre-final" ? "final" : "pre-final"
    );
  };

  return (
    <div className="App" style={{ position: "relative" }}>
      <div className="initial">
        <button onClick={handleClick} className="btn">
          OPEN
        </button>
      </div>
      <div className={myStyle}>
        <button onClick={handleClick} className="btn-cls">
          CLOSE
        </button>
      </div>
    </div>
  );
}

export default App;
