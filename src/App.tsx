import Table from "./components/Test/Table";
import "./index.css";

export type Transaction = {
  date: string;
  from: { token: string; amount: number };
  to: { token: string; amount: number };
  extraProfit: { token: string; amount: number };
};

const transactions: Transaction[] = [
  ...[...Array(20).keys()].map((i) => {
    return {
      date: new Date(Date.now()).toLocaleString(),
      from: { token: "ETH", amount: 300.58 },
      to: { token: "MATIC", amount: 426261.47 },
      extraProfit: { token: "MATIC", amount: 0.012 },
    };
  }),
];

function App() {
  return (
    <div className="App">
      <Table transactions={transactions} />
    </div>
  );
}

export default App;
