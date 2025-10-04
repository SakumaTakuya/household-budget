import './App.css';
import BudgetConfirm from "./components/BudgetConfirm";
import BudgetForm from './components/BudgetForm';
import Navigation from "./components/Navigation";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="App">
      <h1>かんたん家計簿</h1>
      <p>ここから開発スタート！</p>
      <Summary />
      <BudgetForm />
      <BudgetConfirm />

      <Navigation />
    </div>
  );
}

export default App;
