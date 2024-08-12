import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import { getToken, setToken, removeToken } from './util/api';
import './index.css'; 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (token) => {
    setToken(token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    removeToken();
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {isAuthenticated ? <Redirect to="/dashboard" /> : <Login onLogin={handleLogin} />}
        </Route>
        <Route path="/register">
          {isAuthenticated ? <Redirect to="/dashboard" /> : <Register />}
        </Route>
        <Route path="/dashboard">
          {isAuthenticated ? <Dashboard onLogout={handleLogout} /> : <Redirect to="/login" />}
        </Route>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
