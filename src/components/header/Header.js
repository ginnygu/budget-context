import React, { useContext } from "react";
import { HeaderContext } from "../../context/context";
function Header() {
  const { income, expense } = useContext(HeaderContext);

  return (
    <div>
      <h1>Current Budget</h1>
      <p>Total: {income - expense}</p> {/* coming from context */}
      <br />
      <p>Income: {income}</p>
      {/* coming from context */}
      <p>Expense: {expense}</p>
      {/* coming from context */}
    </div>
  );
}

export default Header;
