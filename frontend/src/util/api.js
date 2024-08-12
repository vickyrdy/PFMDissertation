const API_URL = 'http://localhost:5000/api';

export const getToken = () => localStorage.getItem('token');
export const setToken = (token) => localStorage.setItem('token', token);
export const removeToken = () => localStorage.removeItem('token');

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  return response.json();
};

export const loginUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  return response.json();
};

export const fetchExpenses = async () => {
  const response = await fetch(`${API_URL}/expenses`, {
    headers: {
      'Authorization': getToken()
    }
  });
  return response.json();
};

export const addExpense = async (expenseData) => {
  const response = await fetch(`${API_URL}/expenses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken()
    },
    body: JSON.stringify(expenseData)
  });
  return response.json();
};
