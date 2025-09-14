import { useState } from "react";
import './BudgetForm.css';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";
import useCategories from "../hooks/useCategories";
import CategoryModal from "./CategoryModal";


const BudgetForm = () => {
  const { categories, newCategory, setNewCategory, addCategory } = useCategories();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isIncome, setIsIncome] = useState(false);
  const [budget, setBudget] = useState({
    date: "",
    money: "",
    category: "",
    memo: ""
  });

  const handleBudget = (e) => {
    setBudget((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const createBudget = async (event) => {
    event.preventDefault();
    if (
      (budget.date) === "" ||
      (budget.money) === "" ||
      (budget.memo) === "" ||
      (budget.category) === ""
    ) {
      alert("入力してください"); return
    }
    try {
      await addDoc(collection(db, "budget"), {
        ...budget,
        money: Number(budget.money),
        type: isIncome ? "income" : "expense"
      });
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
      <div className="toggle-container">
        <label className="toggle-button-4">
          <input
            type="checkbox"
            checked={isIncome}
            onChange={(e) => setIsIncome(e.target.checked)}
          />
        </label>
      </div>
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
          {categories
            .filter((cat) => cat.type === (isIncome ? "income" : "expense"))
            .map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))
          }
        </select>

        <button onClick={() => setIsModalOpen(true)}>カテゴリを追加</button>

        {isModalOpen && (
          <CategoryModal
            newCategory={newCategory}
            setNewCategory={setNewCategory}
            addCategory={() => addCategory(
              isIncome, () => setIsModalOpen(false)
            )}
            onClose={() => setIsModalOpen(false)}
            isIncome={isIncome}
          />
        )}
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