import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import PhoneBook from './pages/PhoneBook/PhoneBook';
import LoginPage from './pages/LoginPage/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
    <>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/phoneBook" component={PhoneBook} />
      </Switch>
      </>
    </BrowserRouter>
  );
};

export default App;
