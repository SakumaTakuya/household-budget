import BudgetConfirm from "../components/BudgetConfirm";
import BudgetForm from '../components/BudgetForm';
import Summary from "../components/Summary";

function Home() {
  return (
    <>
      <h1>かんたん家計簿</h1>
      <p>ここから開発スタート！</p>
      <Summary />
      <BudgetForm />
      <BudgetConfirm />
    </>
  );
}

export default Home;
