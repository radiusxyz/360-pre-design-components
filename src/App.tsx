// import TestInput from "./components/Search/InputSearch/TestInput";
// import Search from "./components/Search/Search";
import ConfirmationInfo from "./components/ConfirmationInfo/ConfirmationInfo";
import "./index.css";

const transactionDetails = {
  from: { token: "MATIC", amount: 0.225 },
  to: { token: "DAI", amount: 0.225 },
  time: 60,
  fee: "No Fee",
  slippage: 0.01,
  extraProfit: 0.012,
  yourSave: 0.058,
};

function App() {
  return (
    <div className="App">
      <ConfirmationInfo details={transactionDetails} />
    </div>
  );
}

export default App;
