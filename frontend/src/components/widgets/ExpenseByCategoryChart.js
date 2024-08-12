import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';

const ExpenseByCategoryChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/expenses`);
        const expenses = response.data;

        const categories = {};
        expenses.forEach(expense => {
          categories[expense.category] = (categories[expense.category] || 0) + expense.amount;
        });

        setChartData({
          labels: Object.keys(categories),
          datasets: [
            {
              label: 'Expenses by Category',
              data: Object.values(categories),
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40'
              ],
            }
          ]
        });
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div className="widget">
      <h3>Expenses by Category</h3>
      <Doughnut data={chartData} />
    </div>
  );
};

export default ExpenseByCategoryChart;
