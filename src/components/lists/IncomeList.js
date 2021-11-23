import React, { useContext } from "react";
import { ListsContext } from "../../context/context";

function IncomeList() {
  //the list is coming from context
  const { incomeArray, handleDeleteIncome } = useContext(ListsContext);
  return (
    <div>
      <div>
        <h2>Income</h2>
        <ul>
          {incomeArray.map((income, index) => {
            return (
              <li key={index}>
                <span>{income.description}</span>
                <span>{income.amount}</span>
                <button onClick={() => handleDeleteIncome(index)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default IncomeList;
