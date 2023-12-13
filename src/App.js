import React, { useState } from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import TotalExpense from "./components/TotalExpense";
import { BiCalculator } from "react-icons/bi";

// localStorage에 저장된 지출 내역
const initialExpenseList = localStorage.getItem("expenseList")
  ? JSON.parse(localStorage.getItem("expenseList"))
  : [];

const App = () => {
  // 관리 State : expenseList, budget, sumExpense
  const [expenseList, setExpenseList] = useState(initialExpenseList);
  const [sumExpense, setSumExpense] = useState(0);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-zinc-200">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:max-w-3xl">
        <div className="flex px-4 py-2">
          <h1 className="text-2xl font-bold ml-2">예산 계산기</h1>
        </div>
        <div className="mt-3 mb-4">
          <AddExpense
            expenseList={expenseList}
            setExpenseList={setExpenseList}
          />
          <ExpenseList
            expenseList={expenseList}
            setExpenseList={setExpenseList}
          />
           <div className="grid justify-items-end ">
          <TotalExpense
            expenseList={expenseList}
            sumExpense={sumExpense}
            setSumExpense={setSumExpense}
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;