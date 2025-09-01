import './App.css';
import BudgetForm from './components/BudgetForm';

function App() {
  return (
    <div className="App">
      <h1>かんたん家計簿</h1>
      <p>ここから開発スタート！</p>
      {/* 収支サマリー */}
      {/* 入力フォーム */}
      <BudgetForm />
      {/* 取引履歴リスト */}
    </div>
  );
}

export default App;
