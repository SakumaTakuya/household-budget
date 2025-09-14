import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from 'react'
import { db } from "../Firebase";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  useEffect(() => {
    const collectionCategory = collection(db, "category"); //日付を降順で並び替え

    const unsubscribe = onSnapshot(collectionCategory, (snapshot) => {
      const categoryData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCategories(categoryData)
    });
    return () => unsubscribe();
  }, []);

  const addCategory = async (isIncome, onClose) => {
    if (!newCategory) return;
    if (
      newCategory === ""
    ) {
      alert("入力してください"); return
    }
    try {
      await addDoc(collection(db, "category"), {
        id: Date.now(),
        name: newCategory,
        type: isIncome ? "income" : "expense",
      });
      alert("追加完了しました");
      setNewCategory("")
      onClose();      
    } catch (error) {
      console.error(error);
    };
  }
  return {
    categories,
    newCategory,
    setNewCategory,
    addCategory,
  }
}

export default useCategories