import React, { useState, useEffect } from 'react';
import ExpenseForm from './expenseform';
import ExpenseList from './expenselist';
import Budget from './budget';
import CircleChart from './circlechart';
import TopNavbar from './navbar';
import Sidebar from './sidebar';
import { fetchExpenses } from '../utils/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Dashboard = ({ onLogout }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const data = await fetchExpenses();
        setExpenses(data);
      } catch (err) {
        console.error('Error fetching expenses:', err);
      }
    };

    loadExpenses();
  }, []);

  return (
    <div className="dashboard">
      <TopNavbar onLogout={onLogout} />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <CircleChart />
          <ExpenseForm setExpenses={setExpenses} />
          <ExpenseList expenses={expenses} />
          <Budget expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
