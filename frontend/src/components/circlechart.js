import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { fetchExpenses } from '../utils/api';
import 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.min.css';

const CircleChart = () => {
  const [chartData, setChartData] = useState({});
  const [timePeriod, setTimePeriod] = useState('day');

  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const data = await fetchExpenses();
        const filteredData = filterDataByTimePeriod(data, timePeriod);
        const categories = {};
        filteredData.forEach(expense => {
          categories[expense.category] = (categories[expense.category] || 0) + expense.amount;
        });
        setChartData({
          labels: Object.keys(categories),
          datasets: [
            {
              label: 'Expenses by Category',
              data: Object.values(categories),
              backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
              ]
            }
          ]
        });
      } catch (err) {
        console.error(err);
      }
    };

    loadExpenses();
  }, [timePeriod]);

  const filterDataByTimePeriod = (data, period) => {
    const now = new Date();
    return data.filter(expense => {
      const expenseDate = new Date(expense.date);
      if (period === 'day') {
        return expenseDate.toDateString() === now.toDateString();
      } else if (period === 'week') {
        const oneWeekAgo = new Date(now.setDate(now.getDate() - 7));
        return expenseDate >= oneWeekAgo;
      } else if (period === 'month') {
        return expenseDate.getMonth() === now.getMonth() && expenseDate.getFullYear() === now.getFullYear();
      }
      return true;
    });
  };

  return (
    <div className="chart-container">
      <select onChange={(e) => setTimePeriod(e.target.value)} value={timePeriod}>
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
      </select>
      <Doughnut data={chartData} />
    </div>
  );
}

export default CircleChart;
