import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from 'react'
import { db } from "../Firebase";
import './BudgetConfirm.css';

const BudgetConfirm = () => {
  const [budgetList, setBudgetList] = useState([]);
  useEffect(() => {
    const collectionQueDown = query(collection(db, "budget"), orderBy("date", "desc")); //日付を降順で並び替え

    const unsubscribe = onSnapshot(collectionQueDown, (snapshot) => {
      const budgetData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBudgetList(budgetData)
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="BudgetConfirm">
      {budgetList.map(budget => (
        <div key={budget.id} className="budget">
          <p>{budget.date}</p>
          <p>{budget.money}</p>
          <p>{budget.category}</p>
          <p>{budget.memo}</p>
        </div>
      ))}
    </div>
  )
}

export default BudgetConfirm