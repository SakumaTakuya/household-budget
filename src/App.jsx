import './App.css';
import BudgetConfirm from "./components/BudgetConfirm";
import BudgetForm from './components/BudgetForm';

function App() {
  return (
    <div className="App">
      <h1>かんたん家計簿</h1>
      <p>ここから開発スタート！</p>
      {/* 収支サマリー */}
      {/* 入力フォーム */}
      <BudgetForm />
      <BudgetConfirm />
    </div>
  );
}

export default App;
