import React from "react";
import './CategoryModal.css';

const CategoryModal = ({ newCategory, setNewCategory, addCategory, onClose, isIncome }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>新しいカテゴリを追加</h3>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="カテゴリ名を入力"
        />
        <button onClick={() => addCategory(isIncome)}>追加</button>
        <button onClick={onClose}>キャンセル</button>
      </div>
    </div>
  )
}

export default CategoryModal