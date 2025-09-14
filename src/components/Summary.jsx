import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from 'react'
import { db } from "../Firebase";
import './Summary.css';

const Summary = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "budget"), (snapshot) => {
      const data = snapshot.docs.map(doc => doc.data());
      const computed = data.reduce(
        (acc, budget) => {
          if (budget.type === "income") {
            acc.income += budget.money;
          }
          else if (budget.type === "expense") {
            acc.expense += budget.money
          }
          return acc;
        },
        { income: 0, expense: 0 }
      );

      setIncome(computed.income);
      setExpense(computed.expense)
    });
    return () => unsubscribe();
  }, [])
  const balance = income - expense;


  return (
    <div className="summary-all">
      <span>
        <p>収入</p>
        <p className="income">￥{income}</p>
      </span>
      <span>
        <p>支出</p>
        <p className="expense">￥{expense}</p>
      </span>
      <span>
        <p>残高</p>
        <p className="balance">￥{balance}</p>
      </span>
    </div>
  )
}

export default Summary