// import TestInput from "./components/Search/InputSearch/TestInput";
// import Search from "./components/Search/Search";
import ConfirmationInfo from "./components/ConfirmationInfo/ConfirmationInfo";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div
        className="progress"
        style={{ display: "flex", flexDirection: "column", gap: 20 }}
      >
        <p style={{ textAlign: "center" }}>Start</p>
        <ProgressBar status={0} />
        <p style={{ textAlign: "center" }}>InProgress</p>
        <ProgressBar status={1} />
        <p style={{ textAlign: "center" }}>Success</p>
        <ProgressBar status={2} />
        <p style={{ textAlign: "center" }}>Fail</p>
        <ProgressBar status={3} />
      </div>
      <ConfirmationInfo
        details={{
          from: { token: "MATIC", amount: 0.225 },
          to: { token: "DAI", amount: 0.225 },
          time: 60,
          fee: "No Fee",
          slippage: 0.01,
          extraProfit: 0.012,
          yourSave: 0.058,
        }}
      />

      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          minWidth: "auto",
        }}
      >
        <div style={{ backgroundColor: "red", height: 50, width: "auto" }}>
          Hoihoihoi
        </div>
        <div style={{ backgroundColor: "red", height: 50, width: "auto" }}>
          Hihi
        </div>
        <div style={{ backgroundColor: "red", height: 50, width: "auto" }}>
          OiOi
        </div>
      </div> */}
    </div>
  );
}

export default App;
