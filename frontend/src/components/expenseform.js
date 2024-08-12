import React, { useState } from 'react';
import { addExpense } from '../utils/api';

function ExpenseForm({ setExpenses }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newExpense = await addExpense({ description, amount, category });
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <div>
      <h3>Add Expense</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
