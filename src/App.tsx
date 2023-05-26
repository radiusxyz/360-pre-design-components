import { useEffect, useState } from "react";
import BentProgressBar from "./components/Test/BentProgressBar";
import "./index.css";

function App() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    console.log("still");
    if (completed > 99) return;
    const identifier = setInterval(() => {
      setCompleted((completed) => completed + 1);
    }, 100);
    return () => {
      clearInterval(identifier);
    };
  }, [completed]);

  return (
    <div className="App">
      <BentProgressBar completed={completed} />
    </div>
  );
}

export default App;
