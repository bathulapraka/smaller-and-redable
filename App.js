// import logo from "./logo.svg";
import "./ExpenseItem.css";
import ExpenseItem from "./ExpenseItem";
// import ExpenseDetails from "./ExpenseDetails ";
import React from "react";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "bike repair",
      amount: 198.56,
      date: new Date(2020, 1, 6),
    },
    {
      id: "e2",
      title: "medicals",
      amount: 2890.56,
      date: new Date(2020, 3, 19),
    },
    {
      id: "e3",
      title: "dinner",
      amount: 2890.56,
      date: new Date(2010, 3, 19),
    },
  ];
  return (
    <div>
       
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        
        />
      ))}
    </div>
  );
}

export default App;
