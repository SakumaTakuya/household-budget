import './App.css';
import BudgetConfirm from "./components/BudgetConfirm";
import BudgetForm from './components/BudgetForm';
import Summary from "./components/Summary";

function App() {
  return (
    <div className="App">
      <h1>かんたん家計簿</h1>
      <p>ここから開発スタート！</p>
      <Summary />
      <BudgetForm />
      <BudgetConfirm />
    </div>
  );
}

export default App;
