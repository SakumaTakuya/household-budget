import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from 'react'
import { db } from "../Firebase";
import './Summary.css';

const Summary = () => {
  const [totals, setTotals] = useState(0);
  const income = 500000 //ここは後日機能実装予定

  useEffect(() => {
    const getTotalMoney = () => {
      const unsubscribe = onSnapshot(collection(db, "budget"), (snapshot) => {
        const data = snapshot.docs.map(doc => doc.data());
        const computed = data.reduce((acc, budget) => {
          const money = budget.money;
          acc = acc + money;
          return acc;
        }, 0);
        setTotals(computed);
      });
      return () => unsubscribe();
    };
    getTotalMoney()
  }, [])
  const balance = income - totals;


  return (
    <div className="summary-all">
      <span>
        <p>収入</p>
        <p className="income">￥{income}</p>
      </span>
      <span>
        <p>支出</p>
        <p className="expense">￥{totals}</p>
      </span>
      <span>
        <p>残高</p>
        <p className="balance">￥{balance}</p>
      </span>
    </div>
  )
}

export default Summary