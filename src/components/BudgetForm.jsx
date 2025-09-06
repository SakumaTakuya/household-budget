import { useState } from "react";
import './BudgetForm.css';
import { addDoc, collection, } from "firebase/firestore/lite";
import { db } from "../Firebase";

const BudgetForm = () => {
  const [budget, setBudget] = useState({
    date: "",
    money: "",
    category: "",
    memo: ""
  });

  const handleBudget = (e) => {
    setBudget((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const createBudget = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, "budget"), budget);
      alert("追加完了しました");
      setBudget({
        date: "",
        money: "",
        category: "",
        memo: ""
      });
    } catch (error) {
      console.error(error);
    };
  };

  return (
    <div className="budget-form">
      <div className="date-form">
        <label htmlFor="date">日付</label>
        <input
          name="date"
          value={budget.date}
          onChange={handleBudget}
          type="date"
          id="date"
        />
      </div>
      <div className="money-form">
        <label htmlFor="money">金額</label>
        <input
          name="money"
          value={budget.money}
          onChange={handleBudget}
          type="number"
          id="money"
        />
      </div>
      <div className="category-name">
        <label htmlFor="category">カテゴリー</label>
        <select
          name="category"
          value={budget.category}
          onChange={handleBudget}
          id="category">
          <option value="">カテゴリーを選択してください</option>
          <option value="食費">食費</option>
          <option value="光熱費">光熱費</option>
          <option value="家賃">家賃</option>
          <option value="交際費">交際費</option>
          <option value="日用品費">日用品費</option>
        </select>
      </div>
      <div>
        <label htmlFor="memo">メモ</label>
        <textarea
          name="memo"
          value={budget.memo}
          onChange={handleBudget}
          id="memo">
        </textarea>
      </div>
      <div>
        <button onClick={createBudget}>追加する</button>
      </div>
    </div>
  );
}

export default BudgetForm;