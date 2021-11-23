import React, { useContext } from "react";
import { ListsContext } from "../../context/context";

function ExpenseList() {
  //the list is coming from context
  const { expenseList, handleDeleteExpense } = useContext(ListsContext);

  return (
    <div>
      <h2>Expense</h2>
      <ul>
        {expenseList.map((expense, index) => {
          return (
            <li key={index}>
              <span>{expense.description}</span>
              <span>{expense.amount}</span>
              <button onClick={() => handleDeleteExpense(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ExpenseList;
