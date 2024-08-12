import React from 'react';

function Budget({ expenses }) {
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const budget = 1000; // Example budget limit
  const remainingBudget = budget - totalExpenses;

  return (
    <div>
      <h3>Budget</h3>
      <p>Total Expenses: ${totalExpenses}</p>
      <p>Remaining Budget: ${remainingBudget}</p>
    </div>
  );
}

export default Budget;
