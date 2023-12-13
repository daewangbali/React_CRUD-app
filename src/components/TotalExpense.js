import React, { useEffect } from "react";

const TotalExpense = ({ expenseList, sumExpense, setSumExpense }) => {
  // 총 지출액 계산 -> setSumExpense()
  useEffect(() => {
    const sumExpense = expenseList.reduce((pre, cur) => {
      return Number(pre) + Number(cur.amount);
    }, 0);

    setSumExpense(sumExpense);
  }, [expenseList, setSumExpense]);

  return (
    <div className="w-50 px-1">
      <div className="flex justify-center border border-pink-300 bg-pink-50 ring-inset ring-pink-700/10 p-1 pink rounded-2xl mt-10">
      <p className="ml-4 text-pink-500 text-lg font-lightbold mb-2 mr-5">총 지출</p>
        <p className="text-gray-500 mb-2 mr-5">
          ₩{" "}
          <span className="text-gray-800 text-xl text-center font-semibold">
            {sumExpense}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TotalExpense;